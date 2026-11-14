import { useEffect, useMemo, useState } from "react";
import { plants, sectionEntries, sections, type Plant, type SectionName } from "./data/plants";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
  </svg>
);

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="8" y="8" width="11" height="11" rx="2" />
    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
  </svg>
);

function LogoMark() {
  return (
    <div className="logo-mark">
      <img src="/yes-o-logo.png" alt="Youth for Environment in Schools Organization logo" />
    </div>
  );
}

function ImageWithFallback({ plant, className = "" }: { plant: Plant; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className={`image-fallback ${className}`}
        role="img"
        aria-label={`${plant.englishName} image unavailable`}
      >
        <LogoMark />
        <span>Botanical image unavailable</span>
      </div>
    );
  }
  return (
    <img
      className={className}
      src={plant.image}
      alt={`${plant.englishName} (${plant.scientificName}) plant`}
      onError={() => setFailed(true)}
    />
  );
}

function navigate(url: string) {
  window.history.pushState({}, "", url);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Header() {
  return (
    <header className="site-header">
      <a
        className="brand"
        href="/"
        onClick={(event) => {
          event.preventDefault();
          navigate(window.location.pathname);
        }}
      >
        <LogoMark />
        <span className="brand-name">
          <b className="brand-full">Youth for Environment in Schools Organization</b>
          <b className="brand-short" aria-hidden="true">
            YES-O
          </b>
          <i />
          <span>PLANT TAXONOMY</span>
        </span>
      </a>
      <nav aria-label="Main navigation">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            navigate(window.location.pathname);
          }}
        >
          Home
        </a>
        <a
          href="#catalog"
          onClick={(event) => {
            if (new URLSearchParams(window.location.search).has("plant")) {
              event.preventDefault();
              navigate(`${window.location.pathname}#catalog`);
              window.setTimeout(
                () => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" }),
                50,
              );
            }
          }}
        >
          Explore Plants
        </a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer id="about">
      <div>
        <LogoMark />
        <div>
          <strong>Youth for Environment in Schools Organization</strong>
        </div>
      </div>
      <p className="ownership">
        This website is the property of the Youth for Environment in Schools Organization.
      </p>
    </footer>
  );
}

function PlantCard({ plant }: { plant: Plant }) {
  return (
    <a
      className="plant-card"
      href={`?plant=${plant.slug}`}
      onClick={(event) => {
        event.preventDefault();
        navigate(`${window.location.pathname}?plant=${plant.slug}`);
      }}
    >
      <div className="card-image">
        <ImageWithFallback plant={plant} />
        <span>
          View profile <ArrowIcon />
        </span>
      </div>
      <div className="card-copy">
        <p>{plant.filipinoName}</p>
        <h3>{plant.englishName}</h3>
        <em>{plant.scientificName}</em>
      </div>
    </a>
  );
}

function Catalog() {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState<SectionName | "All">("All");
  const featuredPlant = plants[0];

  const matchingPlants = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return plants.filter((plant) => {
      const inSection = activeSection === "All" || plant.sections.includes(activeSection);
      const text = [plant.englishName, plant.filipinoName, plant.scientificName, ...plant.aliases]
        .join(" ")
        .toLowerCase();
      return inSection && (!normalized || text.includes(normalized));
    });
  }, [query, activeSection]);

  const visibleSections = activeSection === "All" ? sections : [activeSection];

  return (
    <main>
      <section className="catalog-hero">
        <div className="catalog-index" aria-label="Collection sections">
          {sections.map((section) => (
            <a key={section} href="#catalog">
              {section}
            </a>
          ))}
        </div>
        <div className="hero-feature">
          <div className="hero-feature-image">
            <ImageWithFallback plant={featuredPlant} />
          </div>
        </div>
        <h1>
          Youth for Environment in Schools Organization<span>.</span>
        </h1>
      </section>

      <section className="catalog-section" id="catalog">
        <div className="section-heading">
          <div>
            <h2>Plant catalog</h2>
          </div>
        </div>

        <div className="catalog-tools">
          <label className="search-box">
            <SearchIcon />
            <span className="sr-only">Search plants</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by common or scientific name"
            />
          </label>
          <div className="filters" aria-label="Filter by section">
            {(["All", ...sections] as const).map((section) => (
              <button
                key={section}
                type="button"
                className={section === activeSection ? "active" : ""}
                onClick={() => setActiveSection(section)}
              >
                {section === "All" ? "All sections" : section.replace("9-", "")}
              </button>
            ))}
          </div>
        </div>

        {matchingPlants.length ? (
          visibleSections.map((section) => {
            const sectionPlants = sectionEntries[section]
              .map((slug) => plants.find((plant) => plant.slug === slug))
              .filter((plant): plant is Plant => Boolean(plant && matchingPlants.includes(plant)));
            if (!sectionPlants.length) return null;
            return (
              <div className="section-group" key={section}>
                <div className="group-title">
                  <h2>{section}</h2>
                </div>
                <div className="plant-grid">
                  {sectionPlants.map((plant) => (
                    <PlantCard key={`${section}-${plant.slug}`} plant={plant} />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-state">
            <h2>No plants found</h2>
            <p>Try a different common name, Filipino name, or scientific name.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveSection("All");
              }}
            >
              Clear search
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

function PlantPage({ plant }: { plant: Plant }) {
  const [copied, setCopied] = useState(false);
  const ranks = Object.entries(plant.taxonomy);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      const input = document.createElement("textarea");
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
      setCopied(true);
    }
  };

  return (
    <main className="plant-page">
      <section className="plant-hero">
        <div className="plant-copy">
          <a
            className="back-link"
            href="/"
            onClick={(event) => {
              event.preventDefault();
              navigate(window.location.pathname);
            }}
          >
            <span>←</span> Back to catalog
          </a>
          <h1>{plant.englishName}</h1>
          <p className="filipino-name">{plant.filipinoName}</p>
          <em className="scientific-name">{plant.scientificName}</em>
          <p className="description">{plant.description}</p>
          <div className="appears">
            <span>Appears in</span>
            <div>
              {sections
                .filter((section) => plant.sections.includes(section))
                .map((section) => (
                  <b key={section}>{section}</b>
                ))}
            </div>
          </div>
          <button className="copy-button" type="button" onClick={copyLink}>
            <CopyIcon /> {copied ? "Link copied" : "Copy plant link"}
          </button>
        </div>
        <div className="plant-visual">
          <div className="botanical-ring" />
          <div className="plant-image-wrap">
            <ImageWithFallback plant={plant} />
          </div>
          <p>Photograph by {plant.imageCredit} · Unsplash</p>
        </div>
      </section>

      <section className="taxonomy-section">
        <div className="taxonomy-intro">
          <h2>
            Taxonomic
            <br />
            hierarchy
          </h2>
          {plant.note && (
            <div className="identity-note">
              <b>Identification note</b>
              {plant.note}
            </div>
          )}
        </div>
        <div className="taxonomy-list">
          {ranks.map(([rank, value], index) => (
            <div className="taxon-row" key={rank}>
              <span>{(index + 1).toString().padStart(2, "0")}</span>
              <b>{rank}</b>
              <em>{value}</em>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-mark">
        <LogoMark />
      </div>
      <h1>Plant not found.</h1>
      <p>The link may be incomplete, or this plant is not yet part of the YES-O collection.</p>
      <button type="button" onClick={() => navigate(window.location.pathname)}>
        Return to catalog <ArrowIcon />
      </button>
    </main>
  );
}

export default function App() {
  const [search, setSearch] = useState(window.location.search);

  useEffect(() => {
    const update = () => setSearch(window.location.search);
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);

  const slug = new URLSearchParams(search).get("plant");
  const plant = slug ? plants.find((entry) => entry.slug === slug.toLowerCase()) : undefined;

  useEffect(() => {
    document.title = plant
      ? `${plant.englishName} | YES-O Plant Taxonomy`
      : slug
        ? "Plant Not Found | YES-O Plant Taxonomy"
        : "YES-O Plant Taxonomy";
  }, [plant, slug]);

  return (
    <div className="app-shell">
      <Header />
      {slug ? plant ? <PlantPage plant={plant} /> : <NotFound /> : <Catalog />}
      <Footer />
    </div>
  );
}

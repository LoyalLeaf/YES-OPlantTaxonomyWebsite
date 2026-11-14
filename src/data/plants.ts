export type SectionName = "9-Dependable" | "9-Dedicated" | "9-Decisive" | "9-Devoted";

export type Taxonomy = {
  domain: string;
  kingdom: string;
  division: string;
  class: string;
  order: string;
  family: string;
  genus: string;
  species: string;
};

export type Plant = {
  slug: string;
  englishName: string;
  filipinoName: string;
  scientificName: string;
  aliases: string[];
  sections: SectionName[];
  description: string;
  note?: string;
  image: string;
  imageCredit: string;
  taxonomy: Taxonomy;
};

const image = (url: string) => `${url}&auto=format&fit=crop&w=1400&q=85`;

export const plants: Plant[] = [
  {
    slug: "pechay",
    englishName: "Bok choy",
    filipinoName: "Pechay / Petchay",
    scientificName: "Brassica rapa subsp. chinensis",
    aliases: ["pechay", "petchay", "bok choy", "pak choi"],
    sections: ["9-Decisive", "9-Dedicated", "9-Dependable", "9-Devoted"],
    description:
      "A fast-growing leafy brassica valued for its crisp pale stalks and tender green leaves. Pechay is one of the most familiar cool-season vegetables in Philippine gardens.",
    image: image(
      "https://images.unsplash.com/photo-1568455283161-1f29a9faaec0?crop=entropy&cs=tinysrgb&fm=jpg",
    ),
    imageCredit: "Peng Wang",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Brassicales",
      family: "Brassicaceae",
      genus: "Brassica",
      species: "Brassica rapa",
    },
  },
  {
    slug: "eggplant",
    englishName: "Eggplant",
    filipinoName: "Talong",
    scientificName: "Solanum melongena",
    aliases: ["eggplant", "talong", "aubergine"],
    sections: ["9-Decisive", "9-Dedicated", "9-Dependable", "9-Devoted"],
    description:
      "A warm-season member of the nightshade family grown for its glossy, edible fruit. Long purple cultivars are especially common in Filipino home gardens and cuisine.",
    image: image(
      "https://images.unsplash.com/photo-1715941872503-fe35529b9c2e?crop=entropy&cs=tinysrgb&fm=jpg",
    ),
    imageCredit: "Duy Le Duc",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Solanales",
      family: "Solanaceae",
      genus: "Solanum",
      species: "Solanum melongena",
    },
  },
  {
    slug: "capsicum",
    englishName: "Bell pepper",
    filipinoName: "Siling bell / Atsal",
    scientificName: "Capsicum annuum",
    aliases: ["capsicum", "bell pepper", "atsal", "siling bell"],
    sections: ["9-Dependable"],
    description:
      "A non-pungent cultivated pepper whose hollow fruits mature from green to yellow, orange, or red. This entry identifies “capsicum” as the common bell pepper rather than hot sili.",
    image: image(
      "https://images.unsplash.com/photo-1592548868664-f8b4e4b1cfb7?crop=entropy&cs=tinysrgb&fm=jpg",
    ),
    imageCredit: "Vino Li",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Solanales",
      family: "Solanaceae",
      genus: "Capsicum",
      species: "Capsicum annuum",
    },
  },
  {
    slug: "tomato",
    englishName: "Tomato",
    filipinoName: "Kamatis",
    scientificName: "Solanum lycopersicum",
    aliases: ["tomato", "kamatis"],
    sections: ["9-Dedicated", "9-Dependable", "9-Devoted"],
    description:
      "A widely cultivated nightshade producing fleshy fruits rich in color and flavor. Its branching, aromatic foliage and clusters of yellow flowers make it easy to recognize.",
    image: image(
      "https://images.unsplash.com/photo-1686278895718-26a2331d7297?crop=entropy&cs=tinysrgb&fm=jpg",
    ),
    imageCredit: "Katerina Shkribey",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Solanales",
      family: "Solanaceae",
      genus: "Solanum",
      species: "Solanum lycopersicum",
    },
  },
  {
    slug: "okra",
    englishName: "Okra / Lady’s finger",
    filipinoName: "Okra",
    scientificName: "Abelmoschus esculentus",
    aliases: ["okra", "lady finger", "lady's finger", "lady’s finger"],
    sections: ["9-Decisive", "9-Dedicated", "9-Dependable", "9-Devoted"],
    description:
      "An upright tropical crop recognized by hibiscus-like flowers and ridged green pods. The tender pods are harvested young and are a familiar ingredient in Filipino dishes.",
    image: image(
      "https://images.unsplash.com/photo-1722077195777-6d77b97ee2a6?crop=entropy&cs=tinysrgb&fm=jpg",
    ),
    imageCredit: "Riaz Khilji",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Malvales",
      family: "Malvaceae",
      genus: "Abelmoschus",
      species: "Abelmoschus esculentus",
    },
  },
  {
    slug: "philippine-oregano",
    englishName: "Cuban oregano",
    filipinoName: "Oregano",
    scientificName: "Coleus amboinicus",
    aliases: ["oregano", "philippine oregano", "cuban oregano"],
    sections: ["9-Dependable"],
    description:
      "A strongly aromatic, fleshy-leaved herb commonly called oregano in the Philippines. It is distinct from Mediterranean oregano, Origanum vulgare.",
    note: "Coleus amboinicus is also widely published under the synonym Plectranthus amboinicus.",
    image: image(
      "https://images.unsplash.com/photo-1696577026660-f21f3fc3a710?crop=entropy&cs=tinysrgb&fm=jpg",
    ),
    imageCredit: "Arbaz Khan",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Lamiales",
      family: "Lamiaceae",
      genus: "Coleus",
      species: "Coleus amboinicus",
    },
  },
  {
    slug: "lily",
    englishName: "Easter lily",
    filipinoName: "Liryo",
    scientificName: "Lilium longiflorum",
    aliases: ["lily", "lilies", "liryo", "easter lily"],
    sections: ["9-Dependable"],
    description:
      "A true lily with narrow leaves and large, fragrant, trumpet-shaped white flowers. Native to parts of East Asia, it is cultivated worldwide as an ornamental.",
    note: "The submitted name “Lilies” is broad. Lilium longiflorum is presented as a representative identification; a specimen photo is needed for confirmation.",
    image: image(
      "https://images.unsplash.com/photo-1669240728303-305faaf6abf8?crop=entropy&cs=tinysrgb&fm=jpg",
    ),
    imageCredit: "Bernd Dittrich",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Liliopsida",
      order: "Liliales",
      family: "Liliaceae",
      genus: "Lilium",
      species: "Lilium longiflorum",
    },
  },
  {
    slug: "sili",
    englishName: "Bird’s eye chili",
    filipinoName: "Siling labuyo / Sili",
    scientificName: "Capsicum frutescens",
    aliases: ["sili", "siling labuyo", "chili", "bird’s eye chili", "bird's eye chili"],
    sections: ["9-Decisive", "9-Dedicated"],
    description:
      "A compact, pungent pepper traditionally associated with siling labuyo. Its small fruits are often held upright and ripen from green to vivid red.",
    note: "“Sili” can refer to several cultivated peppers. This page uses Capsicum frutescens for siling labuyo; specimen traits should be checked for final confirmation.",
    image: image(
      "https://images.unsplash.com/photo-1722782034797-d1dc4157026e?crop=entropy&cs=tinysrgb&fm=jpg",
    ),
    imageCredit: "Paolo Gregotti",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Solanales",
      family: "Solanaceae",
      genus: "Capsicum",
      species: "Capsicum frutescens",
    },
  },
  {
    slug: "lettuce",
    englishName: "Lettuce",
    filipinoName: "Letsugas",
    scientificName: "Lactuca sativa",
    aliases: ["lettuce", "letsugas"],
    sections: ["9-Dedicated", "9-Devoted"],
    description:
      "A cool-season leafy vegetable grown in loose-leaf, romaine, butterhead, and crisphead forms. Its tender leaves are usually eaten fresh.",
    image: image(
      "https://images.unsplash.com/photo-1692606280428-7df25e4daefb?crop=entropy&cs=tinysrgb&fm=jpg",
    ),
    imageCredit: "Nikolett Emmert",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Asterales",
      family: "Asteraceae",
      genus: "Lactuca",
      species: "Lactuca sativa",
    },
  },
  {
    slug: "sweet-potato",
    englishName: "Sweet potato",
    filipinoName: "Kamote",
    scientificName: "Ipomoea batatas",
    aliases: ["sweet potato", "sweet potatoes", "kamote"],
    sections: ["9-Dedicated"],
    description:
      "A trailing vine cultivated for its nutritious storage roots and edible young leaves. It belongs to the morning-glory family and is not closely related to the common potato.",
    image: image(
      "https://images.unsplash.com/photo-1587891089214-f527136fcbdf?crop=entropy&cs=tinysrgb&fm=jpg",
    ),
    imageCredit: "Evie Fjord",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Solanales",
      family: "Convolvulaceae",
      genus: "Ipomoea",
      species: "Ipomoea batatas",
    },
  },
  {
    slug: "cucumber",
    englishName: "Cucumber",
    filipinoName: "Pipino",
    scientificName: "Cucumis sativus",
    aliases: ["cucumber", "pipino"],
    sections: ["9-Decisive", "9-Dedicated"],
    description:
      "A climbing or trailing annual with tendrils, yellow flowers, and elongated fruits. The crisp fruits are harvested immature for salads and pickling.",
    image: image(
      "https://images.unsplash.com/photo-1757111084609-17bbd129a7f6?crop=entropy&cs=tinysrgb&fm=jpg",
    ),
    imageCredit: "Lily Bui Thi",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Cucurbitales",
      family: "Cucurbitaceae",
      genus: "Cucumis",
      species: "Cucumis sativus",
    },
  },
  {
    slug: "moss-rose",
    englishName: "Moss rose",
    filipinoName: "Alas-dose",
    scientificName: "Portulaca grandiflora",
    aliases: ["moss rose", "alas dose", "alas-dose", "portulaca"],
    sections: ["9-Decisive"],
    description:
      "A low-growing succulent ornamental with cylindrical leaves and brilliant, rose-like flowers. Its blooms open most fully in bright sunlight.",
    image: image(
      "https://images.unsplash.com/photo-1613900526182-f03f7d91554c?crop=entropy&cs=tinysrgb&fm=jpg",
    ),
    imageCredit: "Wander Fleur",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Caryophyllales",
      family: "Portulacaceae",
      genus: "Portulaca",
      species: "Portulaca grandiflora",
    },
  },
  {
    slug: "bougainvillea",
    englishName: "Paperflower",
    filipinoName: "Bougainvillea",
    scientificName: "Bougainvillea glabra",
    aliases: ["bougainvillea", "paperflower"],
    sections: ["9-Decisive"],
    description:
      "A thorny ornamental vine known for vivid papery bracts that surround its small white flowers. It thrives in full sun and warm climates.",
    note: "Bougainvillea species and hybrids are difficult to separate without close examination. B. glabra is presented as a likely representative identification.",
    image: image(
      "https://images.unsplash.com/photo-1657068635322-10b0abade5f8?crop=entropy&cs=tinysrgb&fm=jpg",
    ),
    imageCredit: "Ruben Sukatendel",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Caryophyllales",
      family: "Nyctaginaceae",
      genus: "Bougainvillea",
      species: "Bougainvillea glabra",
    },
  },
  {
    slug: "mung-bean",
    englishName: "Mung bean",
    filipinoName: "Monggo / Munggo",
    scientificName: "Vigna radiata",
    aliases: ["mung bean", "monggo", "munggo"],
    sections: ["9-Devoted"],
    description:
      "A short-duration legume bearing trifoliate leaves, yellow flowers, and slender pods. Its small green seeds are an important food crop throughout Asia.",
    image: image(
      "https://images.unsplash.com/photo-1630097000556-e842ad79625b?crop=entropy&cs=tinysrgb&fm=jpg",
    ),
    imageCredit: "Kelly Sikkema",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Fabales",
      family: "Fabaceae",
      genus: "Vigna",
      species: "Vigna radiata",
    },
  },
];

export const sections: SectionName[] = ["9-Decisive", "9-Dedicated", "9-Dependable", "9-Devoted"];

export const sectionEntries: Record<SectionName, string[]> = {
  "9-Dependable": [
    "pechay",
    "eggplant",
    "capsicum",
    "tomato",
    "okra",
    "philippine-oregano",
    "lily",
  ],
  "9-Dedicated": [
    "sili",
    "tomato",
    "okra",
    "eggplant",
    "lettuce",
    "pechay",
    "sweet-potato",
    "cucumber",
  ],
  "9-Decisive": ["cucumber", "eggplant", "okra", "moss-rose", "pechay", "bougainvillea", "sili"],
  "9-Devoted": ["tomato", "pechay", "lettuce", "mung-bean", "okra", "eggplant"],
};

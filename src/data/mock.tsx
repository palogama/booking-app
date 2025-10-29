export type Motive = {
  id: number;
  name: string;
};

export type ConsultationSite = {
  id: number;
  name: string;
  city: string;
  practitioners: { name: string }[];
};

const consultationSites = [
  {
    id: 1,
    name: "UZ Leuven",
    city: "Leuven",
    practitioners: [
      { name: "Dr. Emma Janssens" },
      { name: "Dr. Lucas Peeters" },
    ],
  },
  {
    id: 2,
    name: "Saint-Luc University Hospital",
    city: "Brussels",
    practitioners: [
      { name: "Dr. Sophie Vermeulen" },
      { name: "Dr. Arnaud Dubois" },
    ],
  },
  {
    id: 3,
    name: "UZ Brussel",
    city: "Brussels",
    practitioners: [
      { name: "Dr. Charlotte Van Damme" },
      { name: "Dr. Thomas De Smet" },
    ],
  },
  {
    id: 4,
    name: "Erasme Hospital",
    city: "Brussels",
    practitioners: [
      { name: "Dr. Nicolas Lambert" },
      { name: "Dr. Clara Fontaine" },
    ],
  },
  {
    id: 5,
    name: "Antwerp University Hospital (UZA)",
    city: "Antwerp",
    practitioners: [
      { name: "Dr. Pieter De Wilde" },
      { name: "Dr. Laura De Meyer" },
    ],
  },
  {
    id: 6,
    name: "Ghent University Hospital (UZ Gent)",
    city: "Ghent",
    practitioners: [{ name: "Dr. Elise Claes" }, { name: "Dr. Maxime Baert" }],
  },
  {
    id: 7,
    name: "CHU de Liège",
    city: "Liège",
    practitioners: [
      { name: "Dr. Julien Bernard" },
      { name: "Dr. Camille Dupont" },
    ],
  },
  {
    id: 8,
    name: "CHU de Charleroi (Marie Curie)",
    city: "Charleroi",
    practitioners: [
      { name: "Dr. Henri Marchal" },
      { name: "Dr. Alice Moreau" },
    ],
  },
  {
    id: 9,
    name: "Jessa Hospital",
    city: "Hasselt",
    practitioners: [
      { name: "Dr. Ruben Vangheluwe" },
      { name: "Dr. Ines Coppens" },
    ],
  },
  {
    id: 10,
    name: "AZ Sint-Jan",
    city: "Bruges",
    practitioners: [
      { name: "Dr. Anke De Vos" },
      { name: "Dr. Matthias Van Acker" },
    ],
  },
  {
    id: 11,
    name: "Grand Hôpital de Charleroi",
    city: "Charleroi",
    practitioners: [
      { name: "Dr. Quentin Lefèvre" },
      { name: "Dr. Isabelle Colson" },
    ],
  },
  {
    id: 12,
    name: "CHU UCL Namur (Sainte-Elisabeth)",
    city: "Namur",
    practitioners: [{ name: "Dr. Paul Martin" }, { name: "Dr. Julie Denis" }],
  },
  {
    id: 13,
    name: "AZ Groeninge",
    city: "Kortrijk",
    practitioners: [
      { name: "Dr. Stefaan De Clercq" },
      { name: "Dr. Katrien Vandeput" },
    ],
  },
  {
    id: 14,
    name: "AZ Sint-Lucas",
    city: "Ghent",
    practitioners: [
      { name: "Dr. Johan Verbeeck" },
      { name: "Dr. Sara Willems" },
    ],
  },
  {
    id: 15,
    name: "CHU Tivoli",
    city: "La Louvière",
    practitioners: [{ name: "Dr. Alain Lambert" }, { name: "Dr. Marie Leroy" }],
  },
  {
    id: 16,
    name: "Clinique Saint-Pierre",
    city: "Ottignies",
    practitioners: [{ name: "Dr. Léa Simon" }, { name: "Dr. Victor Dupuis" }],
  },
  {
    id: 17,
    name: "AZ Delta",
    city: "Roeselare",
    practitioners: [
      { name: "Dr. Thomas Van Damme" },
      { name: "Dr. Marie De Vos" },
    ],
  },
  {
    id: 18,
    name: "CHwapi",
    city: "Tournai",
    practitioners: [
      { name: "Dr. Kevin Lambert" },
      { name: "Dr. Claire Dubois" },
    ],
  },
  {
    id: 19,
    name: "Ziekenhuis Oost-Limburg (ZOL)",
    city: "Genk",
    practitioners: [
      { name: "Dr. Bart Peeters" },
      { name: "Dr. Annelies Janssens" },
    ],
  },
  {
    id: 20,
    name: "Clinique Saint-Joseph",
    city: "Liège",
    practitioners: [
      { name: "Dr. Olivier Martin" },
      { name: "Dr. Sophie Lambert" },
    ],
  },
];

const motives = [
  { id: 1, name: "Feeling unwell / illness" },
  { id: 2, name: "General checkup / routine visit" },
  { id: 3, name: "Chronic condition management" },
  { id: 4, name: "Pain or injury" },
  { id: 5, name: "Follow-up from previous visit" },
  { id: 6, name: "Prescription refill / medication review" },
];

export const mock = {
  consultationSites,
  motives,
};

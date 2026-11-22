export const TIPURI = [
  { value: "buchet", label: "Buchet" },
  { value: "aranjament", label: "Aranjament floral" },
  { value: "planta", label: "Plantă în ghiveci" },
];

export const ETICHETE_TIP = Object.fromEntries(
  TIPURI.map((tip) => [tip.value, tip.label])
);

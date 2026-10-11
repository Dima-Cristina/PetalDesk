// Stage 2: data logic (no DOM, no events). Results are printed in the console.

const comenzi = [
  { id: 1, nume: "Buchet de trandafiri roșii", livrata: false, tip: "buchet" },
  { id: 2, nume: "Aranjament floral nuntă", livrata: true, tip: "aranjament" },
  { id: 3, nume: "Orhidee în ghiveci", livrata: false, tip: "planta" },
];

const TIPURI = ["buchet", "aranjament", "planta"];

// Returns an array with the names of all orders.
function listeazaNume(lista) {
  return lista.map((c) => c.nume);
}

// Counts the orders that are not delivered yet.
function numaraInPregatire(lista) {
  return lista.filter((c) => !c.livrata).length;
}

// Returns the orders whose name contains the text (case-insensitive).
function cautaDupaNume(lista, text) {
  const cautat = text.toLowerCase();
  return lista.filter((c) => c.nume.toLowerCase().includes(cautat));
}

// Next id = highest existing id + 1 (lista.length + 1 would create duplicates after a delete).
function nextId(lista) {
  return lista.reduce((max, c) => Math.max(max, c.id), 0) + 1;
}

// Validates, then returns a NEW list with the order added at the end.
function adaugaComanda(lista, nume, tip = "buchet") {
  const numeCurat = nume.trim();
  if (numeCurat === "") {
    console.log("Numele nu poate fi gol.");
    return lista;
  }
  if (!TIPURI.includes(tip)) {
    console.log("Tip invalid:", tip);
    return lista;
  }
  const noua = { id: nextId(lista), nume: numeCurat, livrata: false, tip: tip };
  return [...lista, noua];
}

// Returns a NEW list where the order with this id has the delivered state flipped.
function comutaLivrata(lista, id) {
  return lista.map((c) => (c.id === id ? { ...c, livrata: !c.livrata } : c));
}

// Returns a NEW list without the order with this id.
function stergeComanda(lista, id) {
  return lista.filter((c) => c.id !== id);
}

// ---------- Tests ----------
console.log("--- Citire ---");
console.log("Nume:", listeazaNume(comenzi).join(", "));
console.log("În pregătire:", numaraInPregatire(comenzi));
console.log("Căutare 'buchet':", listeazaNume(cautaDupaNume(comenzi, "buchet")).join(", "));

console.log("--- Adăugare ---");
let lista = adaugaComanda(comenzi, "Buchet de lalele", "buchet");
console.log("Lista nouă:", lista.length, "comenzi");
console.log("Originalul a rămas cu:", comenzi.length, "comenzi");

console.log("--- Modificare și ștergere ---");
lista = comutaLivrata(lista, 1);
console.log("După livrarea id 1, în pregătire:", numaraInPregatire(lista));
lista = stergeComanda(lista, 3);
console.log("După ștergerea id 3:", listeazaNume(lista).join(", "));

console.log("--- Validare ---");
adaugaComanda(lista, "   ");
adaugaComanda(lista, "Ceva", "urgent");

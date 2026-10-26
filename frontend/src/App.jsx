import { useState } from "react";
import ComandaList from "./components/ComandaList.jsx";

// Sample data from the README (initial value only)
const COMENZI_INITIALE = [
  { id: 1, nume: "Buchet de trandafiri roșii", livrata: false, tip: "buchet" },
  { id: 2, nume: "Aranjament floral nuntă", livrata: true, tip: "aranjament" },
  { id: 3, nume: "Orhidee în ghiveci", livrata: false, tip: "planta" },
];

// Starting theme: the one of the operating system
function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [comenzi, setComenzi] = useState(COMENZI_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  // Immutable update: new list, new object for the changed item
  function handleToggleLivrata(id) {
    setComenzi((prev) =>
      prev.map((c) => (c.id === id ? { ...c, livrata: !c.livrata } : c))
    );
  }

  function handleDelete(id) {
    setComenzi((prev) => prev.filter((c) => c.id !== id));
  }

  // Theme switch: state for the button, data-theme attribute for the CSS
  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  // Derived value: recomputed on every render
  const inPregatire = comenzi.filter((c) => !c.livrata).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>PetalDesk</h1>
        <p>Gestionează comenzile florăriei tale: buchete, aranjamente și plante.</p>
        <p className="app-count">
          {comenzi.length} comenzi, dintre care {inPregatire} în pregătire
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Comenzile mele</h2>
          <ComandaList
            comenzi={comenzi}
            onToggle={handleToggleLivrata}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}

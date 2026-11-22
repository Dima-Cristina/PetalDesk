// useEffect runs code after the render (here: the request to the server).
import { useEffect, useState } from "react";
import ComandaList from "./components/ComandaList.jsx";
import ComandaForm from "./components/ComandaForm.jsx";
import {
  createComanda,
  deleteComanda,
  fetchComenzi,
  updateComanda,
} from "./api.js";

// Starting theme: the one of the operating system
function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  // The data comes from the server, so the list starts empty.
  const [comenzi, setComenzi] = useState([]);
  // The three situations of a loading: loading, success, error.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

  // Runs only once, after the first render ([] = no dependencies).
  useEffect(() => {
    // Cleanup flag: do not set state if the component is gone in the meantime.
    let ignore = false;

    // The function passed to useEffect cannot be async itself,
    // so the async function is defined inside.
    async function load() {
      try {
        const data = await fetchComenzi();
        if (!ignore) setComenzi(data);
      } catch (err) {
        // Catches the error thrown by api.js (server down or bad status).
        if (!ignore) setError(err.message);
      } finally {
        // Runs in both cases: the loading is over, whatever the result.
        if (!ignore) setLoading(false);
      }
    }

    load();

    // Cleanup: React calls it when the component disappears.
    return () => {
      ignore = true;
    };
  }, []);

  async function handleAdd(comanda) {
    const creata = await createComanda(comanda);
    setComenzi((prev) => [...prev, creata]);
    setError(null);
  }

  async function handleToggleLivrata(id) {
    const comanda = comenzi.find((c) => c.id === id);
    if (!comanda) return;

    try {
      const actualizata = await updateComanda(id, {
        livrata: !comanda.livrata,
      });
      setComenzi((prev) =>
        prev.map((c) => (c.id === id ? actualizata : c))
      );
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteComanda(id);
      setComenzi((prev) => prev.filter((c) => c.id !== id));
      setError(null);
    } catch (err) {
      setError(err.message);
    }
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
          <h2>Adaugă o comandă florală</h2>
          <ComandaForm onAdd={handleAdd} />
        </section>
        <section className="panel">
          <h2>Comenzile mele</h2>
          {/* Each of the three situations has something on the screen. */}
          {loading && (
            <p className="info" data-testid="loading">
              Se încarcă comenzile...
            </p>
          )}
          {error && (
            <p className="error" data-testid="error">
              Nu am putut comunica cu serverul: {error}. Verifică dacă{" "}
              <code>npm run api</code> rulează.
            </p>
          )}
          {!loading && (
            <ComandaList
              comenzi={comenzi}
              onToggle={handleToggleLivrata}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </>
  );
}

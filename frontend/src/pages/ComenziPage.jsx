import { useEffect, useState } from "react";
import {
  createComanda,
  deleteComanda,
  fetchComenzi,
  updateComanda,
} from "../api.js";
import ComandaForm from "../components/ComandaForm.jsx";
import ComandaList from "../components/ComandaList.jsx";
import styles from "./ComenziPage.module.css";

export default function ComenziPage() {
  const [comenzi, setComenzi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchComenzi();
        if (!ignore) setComenzi(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
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

  const inPregatire = comenzi.filter((comanda) => !comanda.livrata).length;

  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Adaugă o comandă florală</h2>
        <ComandaForm onAdd={handleAdd} />
      </section>
      <section className="panel">
        <h2>Comenzile mele</h2>
        <p className={styles.summary}>
          {comenzi.length} comenzi, dintre care {inPregatire} în pregătire
        </p>
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
    </div>
  );
}

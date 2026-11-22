import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchComanda } from "../api.js";
import { ETICHETE_TIP } from "../constants.js";
import styles from "./ComandaDetaliuPage.module.css";

export default function ComandaDetaliuPage() {
  const { id } = useParams();
  const [rezultat, setRezultat] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetchComanda(id)
      .then((comanda) => {
        if (!ignore) setRezultat({ id, comanda, error: null });
      })
      .catch((err) => {
        if (!ignore) setRezultat({ id, comanda: null, error: err.message });
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (!rezultat || rezultat.id !== id) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă detaliile comenzii...
      </p>
    );
  }

  if (rezultat.error) {
    return (
      <section className="panel">
        <p className="error" data-testid="detail-error">
          Comanda nu a putut fi încărcată: {rezultat.error}
        </p>
        <Link to="/">Înapoi la comenzi</Link>
      </section>
    );
  }

  const { comanda } = rezultat;

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        Înapoi la comenzi
      </Link>
      <h2
        className={comanda.livrata ? styles.done : undefined}
        data-testid="detail-title"
      >
        {comanda.nume}
      </h2>
      <dl className={styles.fields}>
        <dt>Tip floral</dt>
        <dd>
          <span className={`badge badge-${comanda.tip}`}>
            {ETICHETE_TIP[comanda.tip]}
          </span>
        </dd>
        <dt>Status</dt>
        <dd>{comanda.livrata ? "Livrată" : "În pregătire"}</dd>
        <dt>ID comandă</dt>
        <dd>{comanda.id}</dd>
      </dl>
    </section>
  );
}

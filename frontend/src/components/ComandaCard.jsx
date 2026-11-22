import { Link } from "react-router-dom";
import { ETICHETE_TIP } from "../constants.js";
import styles from "./ComandaCard.module.css";

export default function ComandaCard({ comanda, onToggle, onDelete }) {
  return (
    <li
      className={comanda.livrata ? `${styles.card} ${styles.done}` : styles.card}
      data-testid="item"
      data-id={comanda.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={comanda.livrata}
          onChange={() => onToggle(comanda.id)}
          aria-label={`Marchează ${comanda.nume} ca livrată`}
          data-testid="item-toggle"
        />
        <div>
          <h3 data-testid="item-title">
            <Link
              to={`/comenzi/${comanda.id}`}
              className={styles.title}
              data-testid="item-link"
            >
              {comanda.nume}
            </Link>
          </h3>
          <span className={`badge badge-${comanda.tip}`}>
            {ETICHETE_TIP[comanda.tip]}
          </span>
        </div>
      </div>
      <button
        className="btn-danger"
        onClick={() => onDelete(comanda.id)}
        aria-label={`Șterge ${comanda.nume}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}

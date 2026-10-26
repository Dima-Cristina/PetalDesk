// One order, received through props; the actions go up through the functions.
const ETICHETE_TIP = {
  buchet: "Buchet",
  aranjament: "Aranjament",
  planta: "Plantă",
};

export default function ComandaCard({ comanda, onToggle, onDelete }) {
  return (
    <li className={comanda.livrata ? "item-card done" : "item-card"}>
      <label className="item-main">
        <input
          type="checkbox"
          checked={comanda.livrata}
          onChange={() => onToggle(comanda.id)}
        />
        <div>
          <h3>{comanda.nume}</h3>
          <span className={`badge badge-${comanda.tip}`}>
            {ETICHETE_TIP[comanda.tip]}
          </span>
        </div>
      </label>
      <button
        className="btn-danger"
        onClick={() => onDelete(comanda.id)}
        aria-label={`Șterge ${comanda.nume}`}
      >
        Șterge
      </button>
    </li>
  );
}

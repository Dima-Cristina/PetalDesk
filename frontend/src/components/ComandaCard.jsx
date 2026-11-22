// One order, received through props; the actions go up through the functions.
const ETICHETE_TIP = {
  buchet: "Buchet",
  aranjament: "Aranjament",
  planta: "Plantă",
};

export default function ComandaCard({ comanda, onToggle, onDelete }) {
  return (
    <li
      className={comanda.livrata ? "item-card done" : "item-card"}
      data-testid="item"
      data-id={comanda.id}
    >
      <label className="item-main">
        <input
          type="checkbox"
          checked={comanda.livrata}
          onChange={() => onToggle(comanda.id)}
          data-testid="item-toggle"
        />
        <div>
          <h3 data-testid="item-title">{comanda.nume}</h3>
          <span className={`badge badge-${comanda.tip}`}>
            {ETICHETE_TIP[comanda.tip]}
          </span>
        </div>
      </label>
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

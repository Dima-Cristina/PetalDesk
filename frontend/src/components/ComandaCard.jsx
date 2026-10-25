// One order from the list, received through props.
const ETICHETE_TIP = {
  buchet: "Buchet",
  aranjament: "Aranjament",
  planta: "Plantă",
};

export default function ComandaCard({ comanda }) {
  return (
    <li className={comanda.livrata ? "item-card done" : "item-card"}>
      <div>
        <h3>{comanda.nume}</h3>
        <span className={`badge badge-${comanda.tip}`}>
          {ETICHETE_TIP[comanda.tip]}
        </span>
      </div>
      <span className="status">{comanda.livrata ? "Livrată" : "În pregătire"}</span>
    </li>
  );
}

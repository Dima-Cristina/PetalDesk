const comenzi = [
  { id: 1, nume: "Buchet de trandafiri roșii", livrata: false, tip: "buchet" },
  { id: 2, nume: "Aranjament floral nuntă", livrata: true, tip: "aranjament" },
  { id: 3, nume: "Orhidee în ghiveci", livrata: false, tip: "planta" },
];

export default function App() {
  const inPregatire = comenzi.filter((c) => !c.livrata).length;

  return (
    <>
      <header className="app-header">
        <h1>PetalDesk</h1>
        <p>Gestionează comenzile florăriei tale: buchete, aranjamente și plante.</p>
        <p className="app-count">
          {comenzi.length} comenzi, dintre care {inPregatire} în pregătire
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Comenzile mele</h2>
          {/* Temporar: date brute; componentele apar în Etapa 4 */}
          <pre>{JSON.stringify(comenzi, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}
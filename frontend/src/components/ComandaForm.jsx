import { useState } from "react";

const TIPURI = [
  { value: "buchet", label: "Buchet" },
  { value: "aranjament", label: "Aranjament floral" },
  { value: "planta", label: "Plantă în ghiveci" },
];
const NUME_MAX = 100;

export default function ComandaForm({ onAdd }) {
  const [nume, setNume] = useState("");
  const [tip, setTip] = useState("buchet");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const numeCurat = nume.trim();
    if (numeCurat === "") return "Numele comenzii este obligatoriu.";
    if (numeCurat.length > NUME_MAX) {
      return `Numele comenzii poate avea maximum ${NUME_MAX} de caractere.`;
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (trimite) return;

    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);
    try {
      await onAdd({ nume: nume.trim(), tip, livrata: false });
      setNume("");
      setTip("buchet");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  const numeInvalid =
    Boolean(eroare) &&
    (nume.trim() === "" || nume.trim().length > NUME_MAX);

  return (
    <form
      className="item-form"
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >
      <label>
        Numele comenzii
        <input
          type="text"
          value={nume}
          onChange={(e) => setNume(e.target.value)}
          placeholder="Ex.: Buchet de lalele"
          required
          maxLength={NUME_MAX}
          aria-invalid={numeInvalid}
          data-testid="form-title"
        />
      </label>
      <label>
        Tipul florilor
        <select
          value={tip}
          onChange={(e) => setTip(e.target.value)}
          data-testid="form-tip"
        >
          {TIPURI.map((optiune) => (
            <option key={optiune.value} value={optiune.value}>
              {optiune.label}
            </option>
          ))}
        </select>
      </label>
      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}
      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă comanda"}
      </button>
    </form>
  );
}

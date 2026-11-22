import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function Layout() {
  const [tema, setTema] = useState(temaInitiala);

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.logo}>PetalDesk</span>
            <p className={styles.tagline}>
              Comenzi florale, organizate cu grijă.
            </p>
          </div>
          <nav className={styles.nav} aria-label="Navigare principală" data-testid="nav">
            <NavLink to="/" end className={navClass}>
              Comenzi
            </NavLink>
            <NavLink to="/despre" className={navClass}>
              Despre
            </NavLink>
          </nav>
          <button
            className={styles.themeToggle}
            onClick={handleTema}
            aria-pressed={tema === "dark"}
          >
            {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        PetalDesk - comenzi pentru flori, buchete și plante.
      </footer>
    </>
  );
}

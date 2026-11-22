// StrictMode: helps find common mistakes, only in development.
import { StrictMode } from "react";
// createRoot connects React to the page.
import { createRoot } from "react-dom/client";
// The main component of the app.
import App from "./App.jsx";
// The styles are imported here, so they apply to the whole app.
import "./App.css";

// Finds <div id="root"> from index.html and draws the App component inside it.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

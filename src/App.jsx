import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Portada from "./pages/Portada/Portada";
import Bitacora from "./pages/Bitacora/Bitacora";
import Integrantes from "./pages/Integrantes/Integrantes";
import Integrante from "./pages/Integrante/Integrante";
import Musica from "./pages/Musica/Musica";
import Peliculas from "./pages/Peliculas/Peliculas";
import Diagramas from "./pages/Diagramas/Diagramas";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Carga inicial desde localStorage solo una vez
    return localStorage.getItem("theme") === "dark";
  });

  // Aplica el tema al body y guarda en localStorage
  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  return (
    <div className="app">
      <Sidebar />
      <main className="app-main">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`theme-toggle ${darkMode ? "dark-btn" : "light-btn"}`}
        >
          {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
        </button>

        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrantes/:id" element={<Integrante />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/diagramas" element={<Diagramas />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </main>
    </div>
  );
}

export default App;

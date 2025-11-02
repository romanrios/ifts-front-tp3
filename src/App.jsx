import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Portada from "./pages/Portada/Portada";
import Bitacora from "./pages/Bitacora/Bitacora";
import Integrantes from "./pages/Integrantes/Integrantes";
import Integrante from "./pages/Integrante/Integrante";
import Musica from "./pages/Musica/Musica";
import Peliculas from "./pages/Peliculas/Peliculas";
import Diagramas from "./pages/Diagramas/Diagramas";
import { useState, useEffect } from "react";
import "./index.css";



function App() {

  const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") setDarkMode(true);
  }, []);

    useEffect(() => {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(darkMode ? "dark" : "light");
  localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

    
  return (
    <div className="app">
      <Sidebar />
      <main className="app-main">

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid currentColor",
            background: "transparent",
            cursor: "pointer",
            zIndex: 1000,
            }}
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
      </main>
    </div>
  )

  
}

export default App


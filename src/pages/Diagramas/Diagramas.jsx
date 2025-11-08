import styles from "./Diagramas.module.css";

function Diagramas() {


  const estructura = `
ifts-front-tp2/
│
├── public/
│   └── [ imágenes ]
│
├── src/
│   ├── main.jsx           # entrada principal de React
│   ├── App.jsx            # componente raíz
│   ├── index.css          # estilos globales
│   │
│   ├── components/        # componentes reutilizables
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   ├── CardBitacora/
│   │   │   ├── CardBitacora.jsx
│   │   │   └── CardBitacora.module.css
│   │   ├── CardIntegrante/
│   │   │   ├── CardIntegrante.jsx
│   │   │   └── CardIntegrante.module.css
│   │   ├── CardMusica/
│   │   │   ├── CardMusica.jsx
│   │   │   └── CardMusica.module.css
│   │   ├── CardPelicula/
│   │   │   ├── CardPelicula.jsx
│   │   │   └── CardPelicula.module.css
│   │   ├── Carrusel/
│   │   │   ├── Carrusel.jsx
│   │   │   └── Carrusel.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   └── Sidebar/
│   │       ├── Sidebar.jsx
│   │       └── Sidebar.module.css
│   │
│   ├── data/              # archivos de datos / JSON
│   │   ├── integrantes.js
│   │   ├── musica.json
│   │   └── proyectos.js
│   │
│   └── pages/             # vistas / páginas
│       ├── Bitacora/
│       │   ├── Bitacora.jsx
│       │   └── Bitacora.module.css
│       ├── Diagramas/
│       │   ├── Diagramas.jsx
│       │   └── Diagramas.module.css
│       ├── Integrante/
│       │   ├── Integrante.jsx
│       │   └── Integrante.module.css
│       ├── Integrantes/
│       │   └── Integrantes.jsx
│       ├── Musica/
│       │   ├── Musica.jsx
│       │   └── Musica.module.css
│       ├── Peliculas/
│       │   ├── Peliculas.jsx
│       │   └── Peliculas.module.css
│       └── Portada/
│           ├── Portada.jsx
│           └── Portada.module.css
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
`;

  return (
    <section className={styles.diagramas}>
      
  <div className={styles.fotoMain}>
        <h2 className={styles.Titulo}>DIAGRAMAS</h2>
      </div>
      <br />
      <hr />
      <br />
      <h3>Estructura de archivos</h3>
      <pre className={styles.pre}>
        <code>{estructura}</code>
      </pre>

      <br />
      <hr />
      <br />
      <h3>Árbol de renderizado:</h3>
      <br />
      <img 
        src="/Renderizado.drawio.png" 
        alt="Diagrama de Renderizado" 
        className={styles.arbolImagen} 
      />
    </section>
  );
}

export default Diagramas;

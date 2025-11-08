# IFTS · Frontend · Grupo 2  
### Trabajo Práctico Grupal 3 · Proyecto Web en Equipo

---

## Integrantes
- Córdoba, Daniel Ignacio  
- Gómez, Cecilia  
- Giménez, Mariela Belén  
- Lucchelli, Eugenia  
- Ríos, Román  

---

## Descripción del Proyecto
Sitio web grupal desarrollado como **TP3 de Frontend**, utilizando React y Vite.

---

## Enlace al Proyecto Desplegado
🔗 [https://ifts-front-tp3.vercel.app/](https://ifts-front-tp3.vercel.app/)

---

## Instrucciones para Ejecutar el Proyecto

### 1. Clonar el Repositorio
```bash
git clone https://github.com/<usuario>/<nombre-del-repositorio>.git
cd <nombre-del-repositorio>
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Ejecutar en Modo Desarrollo
```bash
npm run dev
```
Abrir en el navegador: [http://localhost:5173/](http://localhost:5173/)


### 4. (Opcional) Build de Producción
```bash
npm run build
npm run preview
```
### 5. Estructura de Archivos
```bash
ifts-front-tp3/
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
│   │   ├── Carrusel/     
│   │   │   ├── Carrusel.jsx
│   │   │   └── Carrusel.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   └── Sidebar/
│   │       ├── Sidebar.jsx
│   │       └── Sidebar.module.css
│   │
│   ├── data/              # archivos de datos / JSON
│   │   ├── integrantes.js
│   │   ├── musica.json
│   │   └── proyectos.js
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
```

---

# Mejoras web front end


## Reproductor de música Spotify

En la sección de canciones se creó una lista de reproducción de las mismas y se embebió el reproductor de spotify con la lista dentro de la página, permitiendo la reproducción de las canciones que se encontraban mencionadas dentro de la web. Esto se realizó mediante una función integrada de esta plataforma:

Antes:

<img width="1290" height="513" alt="image3" src="https://github.com/user-attachments/assets/e0097e14-41f1-4875-a2a1-7dd5a6cedb0c" />


Después:

<img width="1350" height="630" alt="image8" src="https://github.com/user-attachments/assets/205bad19-cc02-4bec-bcbf-39d8efda0d89" />


## Paginación para la API Externa

El buscador de películas, al consultar una API externa (OMDb), puede devolver cientos de resultados para una sola búsqueda. Anteriormente, solo se mostraba la primera página de 10 resultados sin ninguna forma de acceder al resto.
Con esta mejora, se implementa un sistema de navegación que permite al usuario explorar todos los resultados, mejorando la usabilidad y la experiencia de usuario.
Botones de Navegación: Se implementaron los botones "Anterior" y "Siguiente" para modificar el estado de la página.
El botón "Anterior" se deshabilita automáticamente en la primera página. El botón "Siguiente" se deshabilita si la página actual es la última. 

Información al Usuario: Se añadió un texto informativo que detalla el Total de resultados, la Página actual y el Total de páginas disponibles (Ejemplo: Resultados encontrados: 346 | Página 2 de 35).

<img width="1456" height="740" alt="image2" src="https://github.com/user-attachments/assets/6372bd2a-c1e3-4a03-8d3b-5d7cc0cc31aa" />


<img width="704" height="696" alt="image6" src="https://github.com/user-attachments/assets/0941f43c-4f32-49f8-a435-d4d081b01707" />


## Modo oscuro

Se incorporó una funcionalidad de modo oscuro agregando un botón fijo en la esquina superior derecha del sitio que permite alternar entre una interfaz de tema claro y una de tema oscuro, mejorando la experiencia visual del usuario. El modo oscuro modifica los colores de fondo y texto de toda la aplicación y se adapta automáticamente a las tarjetas, botones y footer (siguiente mejora). 
Fue implementado con persistencia. Al iniciar la aplicación, se lee la preferencia guardada en localStorage. Al cambiar el modo, se actualiza la clase <body> (light o dark) y se guarda la elección del usuario. La implementación es compatible con el resto del proyecto, no altera la estructura de componentes ni el enrutamiento. Funciona de forma global aplicando las clases al body, por lo que no se requiere modificar cada página.

Botón implementado (vista modo claro):

<img width="1917" height="728" alt="image1" src="https://github.com/user-attachments/assets/03ed1021-ddb8-4dad-be12-c737fe658e7e" />

Botón implementado (vista modo oscuro):

<img width="1918" height="726" alt="image5" src="https://github.com/user-attachments/assets/993b6d0d-18a9-4ff6-a23d-10ce899ca350" />



## Footer

Se añadió un componente de pie de página (Footer) visible en toda la aplicación. Incluye información institucional del grupo desarrollador y un enlace al repositorio del proyecto en GitHub. El footer mantiene coherencia visual con el resto del sitio, se encuentra centrado en la parte inferior de cada página, posee un enlace clickeable hacia el repositorio y en modo oscuro cambia automáticamente su color de fondo y texto.


Vista: 

<img width="1916" height="893" alt="image7" src="https://github.com/user-attachments/assets/8d0631cb-2a00-4eee-873a-cda2cc271ecf" />

Zoom:

<img width="578" height="61" alt="image10" src="https://github.com/user-attachments/assets/909aa87e-978a-4bb0-8d40-715e9bc90889" />


## Carrusel de Proyectos Destacados 

Esta mejora transforma la página de inicio en un portfolio interactivo, permitiendo al usuario navegar visualmente a través de los proyectos más significativos desarrollados por el equipo. 

Se creó un archivo proyectos.js para centralizar las rutas de las imágenes y los metadatos de los proyectos.

Se implementó un carrusel con animación de deslizamiento horizontal (transform: translateX()), logrando un efecto suave y profesional al navegar entre slides.
Los controles de navegación manual incluyen: 
Flechas (< y >) para la navegación secuencial.
Indicadores (Dots): Para saltar directamente a un proyecto específico.

<img width="1319" height="797" alt="image9" src="https://github.com/user-attachments/assets/b6b7063c-2e86-45c1-a6fc-44c0d489d998" />

## Botón "Volver Arriba"

A través de un componente se agregó un pequeño botón en la esquina inferior derecha, que solo aparece cuando el usuario ha hecho scroll hacia abajo en la página. La función detecta si el scroll vertical es mayor a 300px, muestra el botón. Al hacer clic, la página vuelve hacia arriba.

<img width="1877" height="858" alt="image4" src="https://github.com/user-attachments/assets/b3ac0989-21e3-43e5-bc72-25b683c7b898" />

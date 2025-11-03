import { useEffect, useState } from "react";
import CardPelicula from "../../components/CardPelicula/CardPelicula";
import styles from "./Peliculas.module.css";

const claveAPI = import.meta.env.VITE_KEY_API;

function Peliculas() {
    const [query, setQuery] = useState(
        ["batman", "matrix", "spider man", "avengers", "star wars", "superman", "disney", "pokemon"][
        Math.floor(Math.random() * 8)
        ]
    );
    const [pelis, setPelis] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [page, setPage] = useState(1); 
    const [totalResults, setTotalResults] = useState(0);
    const resultsPerPage = 10;

    const fetchMovies = async (term, currentPage) => {
        if (!term) return;
        setLoading(true);
        setError("");

        try {
            const res = await fetch(`https://www.omdbapi.com/?s=${term}&page=${currentPage}&apikey=${claveAPI}`);
            const json = await res.json();
            console.log("OMDb data:", json);

            if (json.Response === "True") {
                setPelis(json.Search);
                setTotalResults(Number(json.totalResults));
            } else {
                setPelis([]);
                setTotalResults(0);
                setError(json.Error || "No se encontraron películas");
            }
        } catch (err) {
            console.error("Error fetching data:", err);
            setError("Error al obtener datos del servidor.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies(query, page);
    }, [query, page]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setPage(1); 
    };

    // MANEJADORES DE NAVEGACIÓN
    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setPage(prevPage => Math.max(1, prevPage - 1));
    };

    const totalPages = Math.ceil(totalResults / resultsPerPage);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return (
        <section className={styles.peli}>
            <h2>🎬 Buscador de pelis</h2>

            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <input
                    type="text"
                    value={query}
                    placeholder="Buscar película..."
                    onChange={(e) => setQuery(e.target.value)}
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>
                    Buscar
                </button>
            </form>
            
            {/* ELEMENTOS DE PAGINACIÓN AÑADIDOS */}
            {totalResults > 0 && (
                <div className={styles.paginationInfo}>
                    <p>
                        Resultados encontrados: 
                        <span className={styles.paginationValue}>{totalResults}</span>
                        {' | '}
                        Página 
                        <span className={styles.paginationValue}>{page}</span>
                        {' de '}
                        <span className={styles.paginationValue}>{totalPages}</span>
                    </p>
                </div>
            )}
            {/* FIN ELEMENTOS DE PAGINACIÓN */}


            <div className={styles.pelisContainer}>
                {loading ? (
                    <p>Cargando...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : pelis.length > 0 ? (
                    pelis.map((peli, index) => (
                        <div key={`${peli.imdbID}-${index}`} className={styles.peliCard}>
                            <CardPelicula peli={peli} />
                        </div>
                    ))
                ) : (
                    <p>No hay resultados.</p>
                )}
            </div>
            
            {/* BOTONES DE PAGINACIÓN */}
            {(hasPrevPage || hasNextPage) && (
                <div className={styles.paginationControls}>
                    <button 
                        onClick={handlePrevPage} 
                        disabled={!hasPrevPage || loading}
                        className={styles.pageButton}
                    >
                        &larr; Anterior
                    </button>
                    
                    <button 
                        onClick={handleNextPage} 
                        disabled={!hasNextPage || loading}
                        className={styles.pageButton}
                    >
                        Siguiente &rarr;
                    </button>
                </div>
            )}
            {/* FIN BOTONES DE PAGINACIÓN */}

        </section>
    );
}

export default Peliculas;
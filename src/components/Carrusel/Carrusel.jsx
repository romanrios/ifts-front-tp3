import { useState } from 'react';
import { proyectos } from '../../data/proyectos'; 
import styles from './Carrusel.module.css';

function Carrusel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = proyectos.length;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
    };

    const transformValue = `translateX(-${currentIndex * 100}%)`;

    return (
        <div className={styles.carruselContainer}> 
            
            {/* Flecha Anterior */}
            <button onClick={handlePrev} className={`${styles.navButton} ${styles.prev}`}>
                &lt;
            </button>
            
            {}
            <div 
                className={styles.carruselTrack}
                style={{ transform: transformValue }}
            >
                {}
                {proyectos.map((project) => (
                    <div 
                        key={project.id} 
                        className={styles.projectSlide} 
                    >
                        {/* Tarjeta con la imagen */}
                        <div className={styles.projectCard}>
                            <img 
                                src={project.imagen} 
                                alt={project.titulo} 
                                className={styles.projectImageFull} 
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Flecha Siguiente */}
            <button onClick={handleNext} className={`${styles.navButton} ${styles.next}`}>
                &gt;
            </button>

            {/* Indicadores de Posición (Dots) */}
            <div className={styles.dotsContainer}>
                {proyectos.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carrusel;
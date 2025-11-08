import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
    
    // Visibilidad del botón
    const [isVisible, setIsVisible] = useState(false);

    // F. mostrar/ocultar el botón

    const toggleVisibility = () => {
        // Scroll vertical es mayor a 300px, muestra el botón
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // F. scroll hacia arriba
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []); // el efecto se ejecute solo una vez


    return (
        <div className="scroll-to-top">
            {}
            {isVisible && (
                <button onClick={scrollToTop} className="scroll-button">
                    ↑
                    {}
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
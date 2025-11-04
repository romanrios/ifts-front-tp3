import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        © 2025 - Grupo 2 -{" "}
        <a
          href="https://github.com/romanrios/ifts-front-tp3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositorio: github.com/romanrios/ifts-front-tp3
        </a>
      </p>
    </footer>
  );
};

export default Footer;

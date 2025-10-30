import { useEffect, useState } from "react";
import styles from "./Musica.module.css";
import CardMusica from "../../components/CardMusica/CardMusica";
import cancionesData from "../../data/musica.json";


function Musica() {
  const [canciones, setCanciones] = useState([]);

  useEffect(() => {
    setCanciones(cancionesData);
  }, []);

  return (
    <section className={styles.musica}>
      <h2>🎵 Nuestras canciones favoritas</h2>
<iframe 
        data-testid="embed-iframe" 
        style={{borderRadius: "12px"}} 
        src="https://open.spotify.com/embed/playlist/17LFepqlT6mAdotHTOK8qL?utm_source=generator" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowFullScreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        title="Spotify Playlist"
      ></iframe>      <div className={styles.cancionesContainer}>
        {canciones.map((cancion) => (
          <div key={cancion.id} className={styles.cancionCard}>
            <CardMusica cancion={cancion} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Musica;
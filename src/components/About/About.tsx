import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="nosotros" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Sobre Refrisurca</h2>
          <p className={styles.lead}>
            Refrisurca se ha consolidado como líder en soluciones de refrigeración comercial e industrial en la región.
          </p>
          <p>
            Nuestro equipo está formado por profesionales altamente cualificados comprometidos a ofrecer un servicio de excelencia y soluciones personalizadas para cada cliente.
          </p>
          
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>16+</span>
              <span className={styles.statLabel}>Años de experiencia</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>30+</span>
              <span className={styles.statLabel}>Proyectos completados</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Profesionales</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Clientes satisfechos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={styles.bgVideo}
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className="animate-fade-in">
          Soluciones de <span className={styles.highlight}>refrigeración</span> para su negocio
        </h1>
        <p className="animate-fade-in delay-100">
          Ofrecemos servicios profesionales de refrigeración comercial e industrial con la más alta calidad y tecnología de vanguardia.
        </p>
        <div className={`${styles.ctaGroup} animate-fade-in delay-200`}>
          <a href="#servicios" className={styles.btnPrimary}>Nuestros servicios</a>
          <a href="https://wa.me/5493517042953" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>Contáctenos</a>
        </div>
        
        <div className={`${styles.features} animate-fade-in delay-300`}>
          <div className={styles.featureItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span>Servicio 24/7</span>
          </div>
          <div className={styles.featureItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span>Garantía</span>
          </div>
          <div className={styles.featureItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span>Certificados</span>
          </div>
        </div>
      </div>
    </section>
  );
}

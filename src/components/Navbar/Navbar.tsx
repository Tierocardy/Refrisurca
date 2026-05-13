"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#">
            <Image src="/images/logo.png" alt="Refrisurca Logo" width={180} height={45} style={{ objectFit: 'contain' }} className={styles.logoImg} />
          </a>
        </div>
        
        {/* Links */}
        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <li><a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a></li>
          <li><a href="#servicios" onClick={() => setIsMobileMenuOpen(false)}>Servicios</a></li>
          <li><a href="#nosotros" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a></li>
          <li><a href="#proyectos" onClick={() => setIsMobileMenuOpen(false)}>Proyectos</a></li>
          <li><a href="#clientes" onClick={() => setIsMobileMenuOpen(false)}>Clientes</a></li>
        </ul>

        <div className={styles.ctaContainer}>
          <a href="tel:+5493517042953" className={styles.btnSecondary}>Llamar ahora</a>
          <a href="https://wa.me/5493517042953" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>Cotizar</a>
          
          {/* Hamburger Icon */}
          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12"></path>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

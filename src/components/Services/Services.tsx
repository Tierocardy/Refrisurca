import React from 'react';
import styles from './Services.module.css';

const servicesData = [
  {
    title: 'Refrigeración Comercial',
    description: 'Instalación y mantenimiento de equipos de refrigeración para comercios, restaurantes y supermercados.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><path d="M22 13H2"></path><path d="M12 22V4"></path></svg>
    )
  },
  {
    title: 'Refrigeración Industrial',
    description: 'Diseño e implementación de sistemas de refrigeración industrial para fábricas y plantas de producción.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    )
  },
  {
    title: 'Cámaras Frigoríficas',
    description: 'Construcción e instalación de cámaras frigoríficas a medida para conservación de productos perecederos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"></path><path d="M2 13h20"></path><path d="M4 13V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8"></path><line x1="12" y1="3" x2="12" y2="13"></line></svg>
    )
  },
  {
    title: 'Transporte Refrigerado',
    description: 'Equipamiento y mantenimiento de sistemas de refrigeración para vehículos de transporte de alimentos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
    )
  },
  {
    title: 'Mantenimiento 24/7',
    description: 'Servicio de mantenimiento preventivo y correctivo disponible las 24 horas, todos los días del año.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    )
  },
  {
    title: 'Consultoría Energética',
    description: 'Asesoramiento para optimizar el consumo energético de sus sistemas de refrigeración y reducir costos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l2-9 5 18 2-9h5"></path></svg>
    )
  }
];

export default function Services() {
  return (
    <section id="servicios" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Nuestros Servicios</h2>
          <p>Ofrecemos soluciones completas de refrigeración para empresas de todos los tamaños, desde pequeños comercios hasta grandes industrias.</p>
        </div>
        
        <div className={styles.grid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="https://wa.me/5493517042953" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Saber más →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

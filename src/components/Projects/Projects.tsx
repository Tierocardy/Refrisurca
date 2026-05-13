import React from 'react';
import styles from './Projects.module.css';
import Image from 'next/image';

const projectsData = [
  {
    title: 'Manos a la obra: Precisión y técnica en acción',
    description: 'Nos especializamos en trabajar en el mantenimiento de un equipo industrial, asegurando su correcto funcionamiento.',
    tag: 'Refrisurca',
    image: '/images/project1.jpg'
  },
  {
    title: 'Innovación y funcionalidad en un solo diseño',
    description: 'Instalación de sistema completo de refrigeración.',
    tag: 'Sistema de Refrigeracion',
    image: '/images/project2.jpg'
  },
  {
    title: 'Elegancia y frescura en cada exhibición',
    description: 'Este impecable exhibidor refrigerado combina diseño sofisticado y funcionalidad para mantener productos frescos.',
    tag: 'Ideal para negocios',
    image: '/images/project3.jpg'
  },
  {
    title: 'Estilo industrial para una barra de impacto',
    description: 'Esta impresionante barra de diseño industrial combina funcionalidad y carácter con su estructura metálica.',
    tag: 'Restaurantes',
    image: '/images/project4.jpg'
  },
  {
    title: 'Unidad Enfriadora Industrial Carrier',
    description: 'Unidad enfriadora de agua, se encarga de enfriar agua que luego circula por un sistema.',
    tag: 'Cocina',
    image: '/images/project5.jpg'
  },
  {
    title: 'Unidad de Refrigeración con Compresor',
    description: 'Sistema de refrigeración compuesto por un compresor hermético, condensador con ventilador.',
    tag: 'Refrigeracion',
    image: '/images/project6.jpg'
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Nuestros Proyectos</h2>
          <p>Conozca algunos de nuestros proyectos más destacados. Soluciones de refrigeración a medida para diferentes industrias y necesidades.</p>
        </div>
        
        <div className={styles.grid}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className={styles.tag}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  {project.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.actionContainer}>
          <a href="https://wa.me/5493517042953" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>Consultar por Proyectos</a>
        </div>
      </div>
    </section>
  );
}

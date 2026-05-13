import React from 'react';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    name: 'Jean Torres',
    initials: 'JT',
    text: '"Excelente el trabajo y profesionalismo, explícitos a la hora de realizar un trabajo dándote los mejores precios, en el menor tiempo posible. Los recomiendo 100%"',
    rating: 5
  },
  {
    name: 'Fabian Farias',
    initials: 'FF',
    text: '"Excelente atención, me solucionaron el problema de la heladera de mi casa, y en el trabajo la reparación de la cámara de frío quedó como nueva!! Lo recomiendo al 100%"',
    rating: 5
  },
  {
    name: 'Valeria S.',
    initials: 'VS',
    text: '"Excelente servicio, acompañado de responsabilidad en el compromiso asumido (cosa difícil de conseguir en córdoba) lo que asumen, lo cumplen. Muy buenos profesionales, han trabajado para mi mas de una vez, los recomiendo."',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="clientes" className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Lo que dicen nuestros clientes</h2>
          <p>La satisfacción de nuestros clientes es nuestra mayor prioridad. Estas son algunas de las opiniones de quienes han confiado en nosotros.</p>
        </div>
        
        <div className={styles.grid}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{testimonial.initials}</div>
                <span className={styles.name}>{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.actionContainer}>
          <p className={styles.inviteText}>¿Te gustó nuestro servicio? ¡Comparte tu experiencia!</p>
          <a href="#" className={styles.btnSecondary}>Escribir una opinión</a>
        </div>
      </div>
    </section>
  );
}

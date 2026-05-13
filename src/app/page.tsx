import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Testimonials from '@/components/Testimonials/Testimonials';
import FinalCTA from '@/components/FinalCTA/FinalCTA';
import Footer from '@/components/Footer/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp/FloatingWhatsApp';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

import React, { useState } from 'react';
import { GlobalStyle } from './styles/global';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

const brandImage = "https://i.ibb.co/9Cy7vfY/Sem-nome-200-x-200-px-3.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imgSrc: string) => {
    setModalImage(imgSrc);
    setModalOpen(true);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <Header 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        scrollToSection={scrollToSection} 
        logo={brandImage}
      />
      
      {/* ✅ REMOVA o brandImage daqui - Hero usa só a URL interna */}
      <Hero scrollToSection={scrollToSection} />
      
      <About />
      <Services />
      <Gallery openModal={openModal} />
      <Testimonials />
      <Contact />
      <Footer scrollToSection={scrollToSection} logo={brandImage} />

      <WhatsAppFloat />
    </>
  );
}

export default App;
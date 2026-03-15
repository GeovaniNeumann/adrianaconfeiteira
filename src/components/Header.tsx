import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  logo: string;
}

const Navbar = styled(motion.nav)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${props => props.$scrolled ? '10px 0' : '20px 0'};
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${props => props.$scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.$scrolled ? '0 2px 20px rgba(255, 107, 139, 0.15)' : 'none'};
`;

const NavbarContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.img)`
  height: 55px;
  width: auto;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(255, 107, 139, 0.2);
  border: 2px solid white;
`;

const NavMenu = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 30px;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: ${props => props.$isOpen ? '0' : '-100%'};
    width: 100%;
    height: calc(100vh - 70px);
    background: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: left 0.5s ease;
    z-index: 999;
  }
`;

const NavItem = styled.li`
  a {
    color: var(--text);
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    position: relative;
    transition: color 0.3s ease;
    padding: 5px 0;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary);
      transition: width 0.3s ease;
    }

    &:hover {
      color: var(--primary);
      
      &::after {
        width: 100%;
      }
    }
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--primary);

  @media (max-width: 768px) {
    display: block;
  }

  i {
    font-size: 1.8rem;
  }
`;

const OrderButton = styled(motion.a)`
  background: var(--gradient-strong);
  color: white;
  padding: 12px 28px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  border: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header: React.FC<HeaderProps> = ({ menuOpen, setMenuOpen, scrollToSection, logo }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar $scrolled={scrolled}>
      <NavbarContainer>
        <Logo 
          src={logo} 
          alt="Adriana Bolos"
          whileHover={{ scale: 1.05, rotate: 2 }}
        />
        <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`}></i>
        </MenuToggle>
        <NavMenu $isOpen={menuOpen}>
          <NavItem><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>INÍCIO</a></NavItem>
          <NavItem><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>SOBRE</a></NavItem>
          <NavItem><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>BOLOS</a></NavItem>
          <NavItem><a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')}>GALERIA</a></NavItem>
          <NavItem><a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>DEPOIMENTOS</a></NavItem>
          <NavItem><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>CONTATO</a></NavItem>
        </NavMenu>

        <OrderButton 
          href="https://wa.me/5541999751251" 
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-whatsapp"></i> ENCOMENDAR
        </OrderButton>
      </NavbarContainer>
    </Navbar>
  );
};

export default Header;
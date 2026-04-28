import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

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
  background: ${props => props.$scrolled ? '#ffffff' : 'transparent'};
  box-shadow: ${props => props.$scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'};
`;

const NavbarContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.img)<{ $scrolled: boolean }>`
  height: 50px;
  width: auto;
  border-radius: 12px;
  cursor: pointer;
  object-fit: contain;
  filter: ${props => props.$scrolled ? 'none' : 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))'};
  transition: filter 0.3s ease;
`;

const NavMenu = styled(motion.ul)`
  display: flex;
  list-style: none;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li<{ $scrolled: boolean }>`
  a {
    color: ${props => props.$scrolled ? 'var(--text)' : 'white'};
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    position: relative;
    transition: color 0.3s ease;
    padding: 5px 0;
    letter-spacing: 0.5px;
    text-shadow: ${props => props.$scrolled ? 'none' : '2px 2px 4px rgba(0, 0, 0, 0.3)'};

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: ${props => props.$scrolled ? 'var(--gradient)' : 'white'};
      transition: width 0.3s ease;
      border-radius: 2px;
    }

    &:hover {
      color: ${props => props.$scrolled ? 'var(--primary)' : '#ffb6c1'};
      
      &::before {
        width: 80%;
      }
    }
  }
`;

const MenuToggle = styled(motion.div)<{ $scrolled: boolean }>`
  display: none;
  cursor: pointer;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${props => props.$scrolled ? 'rgba(255, 107, 139, 0.1)' : 'transparent'};
  align-items: center;
  justify-content: center;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
  }

  i {
    font-size: 1.6rem;
    color: ${props => props.$scrolled ? 'var(--primary)' : 'white'};
    transition: all 0.3s ease;
    text-shadow: ${props => props.$scrolled ? 'none' : '2px 2px 4px rgba(0, 0, 0, 0.3)'};
  }

  &:hover i {
    transform: scale(1.1);
  }
`;

const OrderButton = styled(motion.a)<{ $scrolled: boolean }>`
  background: ${props => props.$scrolled ? 'var(--gradient)' : 'var(--gradient)'};
  color: white;
  padding: 12px 28px;
  border-radius: 40px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: ${props => props.$scrolled ? 'var(--shadow)' : '0 4px 15px rgba(0, 0, 0, 0.2)'};
  transition: all 0.3s ease;
  border: none;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 8px;

  i {
    font-size: 1.1rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.$scrolled ? 'var(--shadow-hover)' : '0 6px 20px rgba(0, 0, 0, 0.25)'};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1001;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 300px;
  height: 100%;
  background: linear-gradient(135deg, #fff9fa 0%, #ffffff 100%);
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
  z-index: 1002;
  padding: 80px 25px 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavItem = styled(motion.a)`
  color: var(--text);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 10px 12px;
  border-radius: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 14px;
  letter-spacing: 0.5px;

  i {
    width: 24px;
    font-size: 1.2rem;
    color: var(--primary);
  }

  &:hover {
    background: linear-gradient(135deg, rgba(255, 107, 139, 0.08), rgba(255, 182, 193, 0.08));
    color: var(--primary);
    padding-left: 16px;
  }
`;

const MobileOrderButton = styled(motion.a)`
  background: var(--gradient);
  color: white;
  padding: 14px 20px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: var(--shadow);

  i {
    font-size: 1.1rem;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 4px 15px rgba(255, 107, 139, 0.2);
  }
`;

const menuItems = [
  { id: 'home', icon: 'fas fa-home', label: 'INÍCIO' },
  { id: 'about', icon: 'fas fa-heart', label: 'SOBRE' },
  { id: 'services', icon: 'fas fa-cake-candles', label: 'BOLOS' },
  { id: 'gallery', icon: 'fas fa-images', label: 'GALERIA' },
  { id: 'testimonials', icon: 'fas fa-star', label: 'DEPOIMENTOS' },
  { id: 'contact', icon: 'fas fa-envelope', label: 'CONTATO' },
];

const Header: React.FC<HeaderProps> = ({ menuOpen, setMenuOpen, scrollToSection, logo }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <Navbar
        $scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavbarContainer>
          <Logo 
            src={logo} 
            alt="Adriana Bolos"
            $scrolled={scrolled}
            whileHover={{ scale: 1.05 }}
            onClick={(e: any) => scrollToSection(e, 'home')}
          />
          
          <NavMenu>
            {menuItems.map((item) => (
              <NavItem key={item.id} $scrolled={scrolled}>
                <a href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)}>
                  {item.label}
                </a>
              </NavItem>
            ))}
          </NavMenu>

          <MenuToggle 
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            $scrolled={scrolled}
          >
            <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`}></i>
          </MenuToggle>

          <OrderButton 
            href="https://wa.me/5541999751251" 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            $scrolled={scrolled}
          >
            <i className="fab fa-whatsapp"></i> ENCOMENDAR
          </OrderButton>
        </NavbarContainer>
      </Navbar>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <MobileMenuHeader>
              <img src={logo} alt="Adriana Bolos" />
            </MobileMenuHeader>
            
            {menuItems.map((item, index) => (
              <MobileNavItem
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  scrollToSection(e as any, item.id);
                  setMenuOpen(false);
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <i className={item.icon}></i>
                {item.label}
              </MobileNavItem>
            ))}
            
            <MobileOrderButton
              href="https://wa.me/5541999751251"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fab fa-whatsapp"></i>
              FAÇA SEU PEDIDO
            </MobileOrderButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
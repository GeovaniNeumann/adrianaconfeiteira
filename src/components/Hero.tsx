import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface HeroProps {
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  brandImage?: string;
}

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  position: relative;
  overflow: hidden;
  /* Remove o padding-top para a imagem começar do topo */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://i.ibb.co/Q386SXd6/Design-sem-nome-2026-04-28-T164020-467.webp") center/cover no-repeat;
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      105deg,
      rgba(0, 0, 0, 0.55) 0%,
      rgba(0, 0, 0, 0.45) 30%,
      rgba(0, 0, 0, 0.2) 60%,
      rgba(0, 0, 0, 0.05) 100%
    );
    z-index: -1;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 650px;
  padding: 0 20px 0 8%;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
    text-align: center;
    max-width: 100%;
  }
`;

const HeroBadge = styled(motion.span)`
  display: inline-block;
  background: var(--gradient);
  color: white;
  padding: 10px 25px;
  border-radius: 40px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 2rem;
  box-shadow: var(--shadow);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
  line-height: 1.2;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);

  span {
    color: #ffb6c1;
    display: block;
    font-size: 2.8rem;
    font-family: 'Dancing Script', cursive;
    margin-top: 10px;
    font-weight: 400;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1024px) {
    font-size: 3.5rem;
    color: white;
    
    span {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
    text-align: center;
    color: white;
    
    span {
      font-size: 2rem;
    }
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 40px;
  max-width: 550px;
  line-height: 1.7;
  font-weight: 500;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: rgba(255, 255, 255, 0.95);
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled(motion.a)<{ $primary?: boolean }>`
  padding: 14px 35px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: ${props => props.$primary ? 'var(--gradient-strong)' : 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.$primary ? 'white' : 'white'};
  border: 2px solid ${props => props.$primary ? 'transparent' : 'rgba(255, 255, 255, 0.5)'};
  backdrop-filter: ${props => props.$primary ? 'none' : 'blur(10px)'};
  box-shadow: ${props => props.$primary ? 'var(--shadow)' : 'none'};

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
    background: ${props => props.$primary ? 'var(--gradient-reverse)' : 'rgba(255, 255, 255, 0.35)'};
    color: white;
    border-color: ${props => props.$primary ? 'transparent' : 'rgba(255, 255, 255, 0.8)'};
  }
`;

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <HeroSection id="home">
      <HeroContent
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroBadge
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ✦ CONFEITARIA ARTESANAL ✦
        </HeroBadge>

        <HeroTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ADRIANA BOLOS
          <span>Feitos com amor e carinho</span>
        </HeroTitle>

        <HeroSubtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Bolos artesanais preparados com ingredientes selecionados 
          e muito afeto para tornar seus momentos ainda mais doces.
        </HeroSubtitle>

        <HeroButtons
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            href="#gallery" 
            onClick={(e) => scrollToSection(e as any, 'gallery')} 
            $primary
          >
            VER BOLOS
          </Button>
          <Button 
            href="https://wa.me/5541999751251" 
            target="_blank"
          >
            <i className="fab fa-whatsapp"></i>
            FAÇA SEU PEDIDO
          </Button>
        </HeroButtons>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
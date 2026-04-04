    import React from 'react';
    import styled, { DefaultTheme } from 'styled-components';
    import { motion } from 'framer-motion';

    // Extending DefaultTheme to include bgImage
    declare module 'styled-components' {
      export interface DefaultTheme {
        bgImage?: string;
      }
    }

    interface HeroProps {
      scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
      brandImage: string;
    }

    const HeroSection = styled.section`
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
      overflow: hidden;
      padding-top: 80px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${props => props.theme.bgImage}) center/cover;
        filter: blur(2px) brightness(1.1);
        z-index: -2;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, 
          rgba(255, 255, 255, 0.8), 
          rgba(255, 242, 245, 0.8));
        z-index: -1;
      }
    `;

    const HeroContent = styled(motion.div)`
      max-width: 800px;
      padding: 0 20px;
      position: relative;
      z-index: 2;
    `;

    const HeroBadge = styled(motion.span)`
      display: inline-block;
      background: var(--primary);
      color: white;
      padding: 10px 25px;
      border-radius: 40px;
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 2rem;
      box-shadow: var(--shadow);
      text-transform: uppercase;
      letter-spacing: 1px;
    `;

    const HeroTitle = styled(motion.h1)`
      font-size: 5rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: var(--text);
      line-height: 1.2;

      span {
        color: var(--primary);
        display: block;
        font-size: 3.5rem;
        font-family: 'Dancing Script', cursive;
        margin-top: 10px;
        font-weight: 400;
      }

      @media (max-width: 768px) {
        font-size: 3.5rem;
        
        span {
          font-size: 2.5rem;
        }
      }
    `;

    const HeroSubtitle = styled(motion.p)`
      font-size: 1.3rem;
      color: var(--text-light);
      margin-bottom: 40px;
      max-width: 600px;
      margin: 0 auto 40px;
      line-height: 1.8;
      font-weight: 400;
    `;

    const HeroButtons = styled(motion.div)`
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    `;

    const Button = styled(motion.a)<{ $primary?: boolean }>`
      padding: 16px 40px;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: ${props => props.$primary ? 'var(--gradient-strong)' : 'transparent'};
      color: ${props => props.$primary ? 'white' : 'var(--primary)'};
      border: 2px solid ${props => props.$primary ? 'transparent' : 'var(--primary)'};
      box-shadow: ${props => props.$primary ? 'var(--shadow)' : 'none'};

      &:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-hover);
        background: ${props => props.$primary ? 'var(--gradient-reverse)' : 'var(--primary)'};
        color: white;
        border-color: transparent;
      }
    `;

    const Hero: React.FC<HeroProps> = ({ scrollToSection, brandImage }) => {
      return (
        <HeroSection id="home" theme={{ bgImage: brandImage }}>
          <HeroContent
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <HeroBadge
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              ✦ CONFEITARIA ARTESANAL ✦
            </HeroBadge>

            <HeroTitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              ADRIANA BOLOS
              <span>Feitos com amor e carinho</span>
            </HeroTitle>

            <HeroSubtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Bolos artesanais preparados com ingredientes selecionados 
              e muito afeto para tornar seus momentos ainda mais doces.
            </HeroSubtitle>

            <HeroButtons
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
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
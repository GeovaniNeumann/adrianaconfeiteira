import React from 'react';
import styled from 'styled-components';

interface FooterProps {
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  logo: string;
}

const FooterSection = styled.footer`
  background: white;
  padding: 50px 20px 20px;
  border-top: 3px solid var(--primary-light);
  box-shadow: 0 -5px 20px rgba(255, 107, 139, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const FooterLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover; /* Isso garante que a imagem se ajuste sem ficar achatada */
  border: 3px solid var(--primary);
  box-shadow: var(--shadow);
  background: white;
`;

const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  background: var(--secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 1.3rem;
  transition: all 0.3s ease;
  border: 1px solid var(--primary-light);

  &:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-3px);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  color: var(--text-light);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  font-weight: 500;

  &:hover {
    color: var(--primary);
  }
`;

const FooterCopyright = styled.div`
  color: var(--text-light);
  font-size: 0.85rem;
  padding-top: 20px;
  border-top: 1px dashed var(--primary-light);

  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-dark);
    }
  }

  p {
    margin: 5px 0;
  }

  .heart {
    color: var(--primary);
    display: inline-block;
    animation: pulse 1.5s ease infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const Footer: React.FC<FooterProps> = ({ scrollToSection, logo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <LogoContainer>
          <FooterLogo 
            src={logo} 
            alt="Adriana Bolos"
          />
        </LogoContainer>
        
        <FooterSocial>
          <SocialLink href="https://www.instagram.com/adriana_bolos06/" target="_blank">
            <i className="fab fa-instagram"></i>
          </SocialLink>
          <SocialLink href="https://wa.me/5541999751251" target="_blank">
            <i className="fab fa-whatsapp"></i>
          </SocialLink>
        </FooterSocial>

        <FooterLinks>
          <FooterLink href="#home" onClick={(e) => scrollToSection(e, 'home')}>Início</FooterLink>
          <FooterLink href="#about" onClick={(e) => scrollToSection(e, 'about')}>Sobre</FooterLink>
          <FooterLink href="#services" onClick={(e) => scrollToSection(e, 'services')}>Bolos</FooterLink>
          <FooterLink href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')}>Galeria</FooterLink>
          <FooterLink href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contato</FooterLink>
        </FooterLinks>

        <FooterCopyright>
          <p>© {currentYear} Adriana Bolos - Todos os direitos reservados.</p>
          <p>
            Desenvolvido por <a href="https://portifolio-geovani.vercel.app/" target="_blank" rel="noopener noreferrer">
              Geovani Neumann
            </a>
          </p>
        </FooterCopyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;
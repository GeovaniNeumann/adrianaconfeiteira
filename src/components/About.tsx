import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 80px 20px;
  background: var(--secondary);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text);
  font-family: 'Playfair Display', serif;

  &::after {
    content: '✦';
    display: block;
    font-size: 2rem;
    color: var(--primary);
    margin: 0.5rem auto 0;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
`;

const AboutImg = styled(motion.img)`
  flex: 1;
  min-width: 300px;
  border-radius: 20px;
  box-shadow: var(--shadow);
  border: 5px solid white;
`;

const AboutContent = styled(motion.div)`
  flex: 1;
  min-width: 300px;
`;

const AboutText = styled.p`
  margin-bottom: 20px;
  color: var(--text-light);
  line-height: 1.8;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled(motion.div)`
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }

  i {
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: var(--text);
  }

  p {
    font-size: 0.9rem;
    color: var(--text-light);
  }
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre Nós
        </Title>
        <AboutContainer>
          <AboutImg
            src="https://i.ibb.co/5WwKWXjm/Imagem-do-Whats-App-de-2025-07-07-s-18-18-16-8a7b4d6f.jpg "
            alt="Adriana preparando bolos"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <AboutContent
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AboutText>
              A Adriana Bolos nasceu do sonho de levar mais doçura e alegria para a vida das pessoas. 
              Cada bolo é preparado com ingredientes frescos, muito carinho e atenção aos detalhes, 
              resultando em criações únicas que encantam tanto pelo sabor quanto pela beleza.
            </AboutText>
            <AboutText>
              Nossa missão é tornar seus momentos especiais ainda mais memoráveis, com bolos que 
              não apenas alimentam, mas aquecem o coração. Utilizamos técnicas artesanais e receitas 
              exclusivas desenvolvidas ao longo de anos de dedicação à confeitaria.
            </AboutText>
            <FeaturesGrid>
              <FeatureItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <i className="fas fa-heart"></i>
                <h3>Feito com Amor</h3>
                <p>Cada bolo é único e preparado com todo carinho</p>
              </FeatureItem>
              <FeatureItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <i className="fas fa-leaf"></i>
                <h3>Ingredientes Frescos</h3>
                <p>Selecionamos os melhores produtos</p>
              </FeatureItem>
              <FeatureItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <i className="fas fa-star"></i>
                <h3>Sabores Exclusivos</h3>
                <p>Receitas especiais e deliciosas</p>
              </FeatureItem>
            </FeaturesGrid>
          </AboutContent>
        </AboutContainer>
      </Container>
    </AboutSection>
  );
};

export default About;
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    title: 'Bolos de Aniversário',
    description: 'Criações personalizadas para celebrar momentos especiais com muito sabor e elegância.',
    icon: 'fas fa-birthday-cake'
  },
  {
    id: 2,
    title: 'Bolos de Casamento',
    description: 'O bolo dos sonhos para o dia mais especial da sua vida, com design exclusivo.',
    icon: 'fas fa-heart'
  },
  {
    id: 3,
    title: 'Bolos Decorados',
    description: 'Arte em bolo com temas personalizados para todas as ocasiões.',
    icon: 'fas fa-paint-brush'
  }
];

const ServicesSection = styled.section`
  padding: 80px 20px;
  background: var(--bg);
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 158, 181, 0.2);

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary);
  }

  i {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.5rem;
    color: var(--text);
    margin-bottom: 15px;
  }

  p {
    color: var(--text-light);
    line-height: 1.6;
  }
`;

const Services: React.FC = () => {
  return (
    <ServicesSection id="services">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nossas Especialidades
        </Title>
        <ServicesGrid>
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';

const TestimonialsSection = styled.section`
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: var(--shadow);
  position: relative;
  border: 1px solid rgba(255, 158, 181, 0.1);

  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 5rem;
    color: var(--primary);
    opacity: 0.2;
    font-family: serif;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.8;
    margin-bottom: 20px;
    font-style: italic;
    color: var(--text-light);
    position: relative;
    z-index: 1;
  }

  h4 {
    color: var(--primary-dark);
    font-size: 1rem;
    text-align: right;
    font-weight: 600;
  }
`;

const Testimonials: React.FC = () => {
  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          O que dizem nossos clientes
        </Title>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p>"{testimonial.text}"</p>
              <h4>{testimonial.name}</h4>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
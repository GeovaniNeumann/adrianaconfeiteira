import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FloatBtn = styled(motion.a)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 65px;
  height: 65px;
  background: var(--gradient);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  box-shadow: var(--shadow-hover);
  transition: all 0.3s ease;
  z-index: 999;
  border: 3px solid white;

  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 10px 30px rgba(255, 158, 181, 0.4);
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 1.8rem;
    bottom: 20px;
    right: 20px;
  }
`;

const WhatsAppFloat: React.FC = () => {
  return (
    <FloatBtn
      href="https://wa.me/5541999751251"
      target="_blank"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <i className="fab fa-whatsapp"></i>
    </FloatBtn>
  );
};

export default WhatsAppFloat;
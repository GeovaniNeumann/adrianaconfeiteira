import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FloatBtn = styled(motion.a)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 65px;
  height: 65px;
  background: var(--gradient-strong);
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
  text-decoration: none; /* Remove underline do link */

  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 10px 30px rgba(255, 107, 139, 0.4);
    text-decoration: none; /* Garante que não apareça underline no hover */
  }

  i, svg {
    text-decoration: none; /* Remove underline do ícone */
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 1.8rem;
    bottom: 20px;
    right: 20px;
  }
`;

// Se tiver o Tooltip, ajuste também
const Tooltip = styled(motion.span)`
  position: absolute;
  right: 80px;
  background: var(--primary);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  white-space: nowrap;
  border: 1px solid white;
  pointer-events: none;
  text-decoration: none; /* Remove underline do tooltip */

  @media (max-width: 768px) {
    display: none;
  }
`;

const WhatsAppFloat: React.FC = () => {
  return (
    <FloatBtn
      href="https://wa.me/5541999751251"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Tooltip
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        Faça seu pedido!
      </Tooltip>
      <i className="fab fa-whatsapp"></i>
    </FloatBtn>
  );
};

export default WhatsAppFloat;
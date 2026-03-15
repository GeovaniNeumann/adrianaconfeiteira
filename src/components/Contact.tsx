import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 80px 20px;
  background: var(--secondary);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text);
  font-family: 'Playfair Display', serif;

  &::after {
    content: '✦';
    display: block;
    font-size: 2.2rem;
    color: var(--primary);
    margin: 0.5rem auto 0;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
`;

const ContactInfo = styled(motion.div)`
  flex: 1;
  min-width: 300px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 25px;
  background: white;
  padding: 25px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  border: 1px solid var(--primary-light);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary);
  }

  i {
    font-size: 2rem;
    color: var(--primary);
    min-width: 45px;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: var(--text);
    font-weight: 600;
  }

  p {
    color: var(--text-light);
    line-height: 1.6;
  }
`;

const ContactForm = styled(motion.form)`
  flex: 1;
  min-width: 300px;
  background: white;
  border-radius: var(--border-radius);
  padding: 40px;
  box-shadow: var(--shadow);
  border: 1px solid var(--primary-light);
`;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--text);
  margin-bottom: 30px;
  text-align: center;
  font-family: 'Playfair Display', serif;
  color: var(--primary-dark);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormControl = styled.input`
  width: 100%;
  padding: 15px;
  background: var(--secondary);
  border: 1px solid var(--primary-light);
  border-radius: 8px;
  color: var(--text);
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(255, 107, 139, 0.1);
  }

  &::placeholder {
    color: var(--text-light);
    opacity: 0.7;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  background: var(--secondary);
  border: 1px solid var(--primary-light);
  border-radius: 8px;
  color: var(--text);
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(255, 107, 139, 0.1);
  }

  &::placeholder {
    color: var(--text-light);
    opacity: 0.7;
  }
`;

const FormBtn = styled(motion.button)`
  width: 100%;
  padding: 16px;
  background: var(--gradient-strong);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Novo pedido - Adriana Bolos*%0A%0A
*Nome:* ${formData.nome}%0A
*Email:* ${formData.email}%0A
*Telefone:* ${formData.telefone}%0A
*Mensagem:* ${formData.mensagem}`;

    const whatsappUrl = `https://wa.me/5541999751251?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Entre em Contato
        </Title>
        <ContactContainer>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <InfoItem>
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Endereço</h3>
                <p>Bairro Alto - Curitiba/PR</p>
                <p>Atendemos em domicílio</p>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="fab fa-whatsapp"></i>
              <div>
                <h3>WhatsApp</h3>
                <p>(41) 99975-1251</p>
                <p>Atendimento rápido e personalizado</p>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="fab fa-instagram"></i>
              <div>
                <h3>Instagram</h3>
                <p>@adriana_bolos06</p>
                <p>Acompanhe nossas novidades</p>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="fas fa-clock"></i>
              <div>
                <h3>Horário de Atendimento</h3>
                <p>Segunda a Sexta: 08:00 - 18:00</p>
                <p>Sábado: 08:00 - 12:00</p>
              </div>
            </InfoItem>
          </ContactInfo>
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FormTitle>Faça seu pedido</FormTitle>
            <FormGroup>
              <FormControl
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="email"
                name="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="tel"
                name="telefone"
                placeholder="Seu WhatsApp"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <TextArea
                name="mensagem"
                placeholder="Me conte sobre o bolo dos seus sonhos: sabor, tamanho, data, decoração..."
                value={formData.mensagem}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormBtn
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ENVIAR PEDIDO VIA WHATSAPP
            </FormBtn>
          </ContactForm>
        </ContactContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact;
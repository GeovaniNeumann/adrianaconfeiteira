  import React, { useState } from 'react';
  import styled from 'styled-components';
  import { motion, AnimatePresence } from 'framer-motion';
  import { galleryImages } from '../data/gallery';

  interface GalleryProps {
    openModal: (img: string) => void;
  }

  const GallerySection = styled.section`
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

  const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  `;

  const GalleryItem = styled(motion.div)`
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    aspect-ratio: 1/1;
    box-shadow: var(--shadow);
    border: 3px solid white;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }

      .overlay {
        opacity: 1;
      }
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(255, 158, 181, 0.9), transparent);
      color: white;
      padding: 20px;
      opacity: 0;
      transition: opacity 0.3s ease;

      h4 {
        font-size: 1.2rem;
        margin-bottom: 5px;
        color: white;
      }

      p {
        font-size: 0.9rem;
        color: rgba(255,255,255,0.9);
      }
    }
  `;

  const Modal = styled(motion.div)<{ $show: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 249, 250, 0.95);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    opacity: ${props => props.$show ? 1 : 0};
    pointer-events: ${props => props.$show ? 'all' : 'none'};
    transition: opacity 0.3s ease;
    backdrop-filter: blur(5px);
  `;

  const ModalContent = styled(motion.div)`
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    background: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: var(--shadow-hover);

    img {
      width: 100%;
      height: auto;
      max-height: 70vh;
      object-fit: contain;
      border-radius: 10px;
    }
  `;

  const ModalClose = styled.span`
    position: absolute;
    top: -15px;
    right: -15px;
    width: 40px;
    height: 40px;
    background: var(--primary);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: var(--shadow);

    &:hover {
      transform: rotate(90deg);
      background: var(--primary-dark);
    }
  `;

  const ModalInfo = styled.div`
    text-align: center;
    margin-top: 15px;

    h3 {
      font-size: 1.3rem;
      color: var(--text);
      margin-bottom: 5px;
    }

    p {
      color: var(--primary-dark);
      font-size: 0.95rem;
    }
  `;

  const Gallery: React.FC<GalleryProps> = ({ openModal }) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const selectedImageData = selectedImage !== null 
      ? galleryImages.find(img => img.id === selectedImage) 
      : null;

    return (
      <GallerySection id="gallery">
        <Container>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossas Criações
          </Title>
          <GalleryGrid>
            {galleryImages.map((image, index) => (
              <GalleryItem
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedImage(image.id)}
              >
                <img src={image.url} alt={image.title} />
                <div className="overlay">
                  <h4>{image.title}</h4>
                  <p>{image.category}</p>
                </div>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </Container>

        <AnimatePresence>
          {selectedImageData && (
            <Modal
              $show={selectedImage !== null}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <ModalContent
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={e => e.stopPropagation()}
              >
                <img src={selectedImageData.url} alt={selectedImageData.title} />
                <ModalInfo>
                  <h3>{selectedImageData.title}</h3>
                  <p>{selectedImageData.category}</p>
                </ModalInfo>
                <ModalClose onClick={() => setSelectedImage(null)}>×</ModalClose>
              </ModalContent>
            </Modal>
          )}
        </AnimatePresence>
      </GallerySection>
    );
  };

  export default Gallery;
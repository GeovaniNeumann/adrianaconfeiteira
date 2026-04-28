import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #ff6b8b;
    --primary-dark: #e84363;
    --primary-light: #ffb6c1;
    --secondary: #fff2f5;
    --accent: #a8d5ba;
    --bg: #ffffff;
    --bg-card: #ffffff;
    --text: #4a4a4a;
    --text-light: #5a5a5a;
    --gradient: linear-gradient(135deg, #ff6b8b 0%, #ffb6c1 100%);
    --gradient-reverse: linear-gradient(135deg, #ffb6c1 0%, #ff6b8b 100%);
    --gradient-strong: linear-gradient(135deg, #ff4d6d 0%, #ff6b8b 100%);
    --shadow: 0 10px 30px rgba(255, 107, 139, 0.2);
    --shadow-hover: 0 15px 40px rgba(232, 67, 99, 0.25);
    --border-radius: 12px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    max-width: 100%;
    overflow-x: hidden;
    position: relative;
  }

  html {
    scroll-behavior: smooth;
    font-size: 18px; /* Aumentado de 16px para 18px */
  }

  body {
    font-family: 'Quicksand', 'Poppins', sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    width: 100%;
    overflow-x: hidden;
    font-size: 1.1rem; /* Texto base maior */
  }

  #root {
    width: 100%;
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
  }

  h1, h2, h3, h4 {
    font-family: 'Playfair Display', 'Montserrat', serif;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.02em;
    word-wrap: break-word;
  }

  h1 {
    font-size: 2.7rem; /* Aumentado */
  }

  h2 {
    font-size: 2.2rem; /* Aumentado */
  }

  h3 {
    font-size: 2rem; /* Aumentado */
  }

  h4 {
    font-size: 1.5rem; /* Aumentado */
  }

  p {
    font-size: 1.1rem; /* Aumentado de 1rem */
    color: var(--text-light);
    line-height: 1.8;
    word-wrap: break-word;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
  }

  .section-title {
    font-size: clamp(2.5rem, 5vw, 2.2rem); /* Aumentado */
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    color: var(--text);
    font-family: 'Playfair Display', serif;
    padding: 0 15px;
    width: 100%;
    
    &::after {
      content: '✦';
      display: block;
      font-size: clamp(2rem, 4vw, 2.5rem); /* Aumentado */
      color: var(--primary);
      margin: 0.8rem auto 0;
      line-height: 1;
      opacity: 0.8;
    }
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: var(--secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark);
  }

  /* TABLET (768px - 1024px) */
  @media (max-width: 1024px) {
    html {
      font-size: 17px;
    }
    
    body {
      font-size: 1rem;
    }
    
    h1 {
      font-size: 3rem;
    }
    
    h2 {
      font-size: 2.4rem;
    }
    
    h3 {
      font-size: 1.8rem;
    }
    
    .container {
      padding: 0 25px;
    }
  }

  /* MOBILE GRANDE (481px - 768px) */
  @media (max-width: 768px) {
    html {
      font-size: 16px;
    }
    
    body {
      font-size: 1rem;
    }
    
    h1 {
      font-size: 2.5rem;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    h3 {
      font-size: 1.6rem;
    }
    
    h4 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 1rem;
    }
    
    .container {
      padding: 0 20px;
    }
    
    .section-title {
      font-size: 2.2rem;
      margin-bottom: 2.5rem;
      
      &::after {
        font-size: 1.8rem;
      }
    }
  }

  /* MOBILE PEQUENO (até 480px) */
  @media (max-width: 480px) {
    html {
      font-size: 15px;
    }
    
    h1 {
      font-size: 2.2rem;
    }
    
    h2 {
      font-size: 1.8rem;
    }
    
    h3 {
      font-size: 1.4rem;
    }
    
    .section-title {
      font-size: 1.8rem;
      
      &::after {
        font-size: 1.5rem;
      }
    }
  }
`;
import { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="hero-section">
      <div className="hero-photo">
        {!imageError ? (
          <img 
            src="/profile.png" 
            alt="William Cardoso" 
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="photo-placeholder">
            <span>WC</span>
          </div>
        )}
      </div>
      <h1 className="hero-name">William Cardoso</h1>
      <p className="hero-description">
        Pesquisador e desenvolvedor em Ciência da Computação, atuando em processamento de linguagem natural, 
        visão computacional e projeto de sistemas. Também ofereço consultoria em tecnologia e inteligência artificial.
      </p>
      <div className="hero-social-links">
        <a href="https://github.com/williancarddd" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="http://lattes.cnpq.br/8165329615542562" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Lattes">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </a>
        <a href="https://orcid.org/0000-0003-2067-4857" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="ORCID">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.568 8.16-1.414 1.414-4.242-4.242-1.414 1.414-1.414-1.414-2.12 2.122 1.415 1.414-.002.002.002.003-4.243 4.242-1.414-1.414 4.243-4.243.002-.002-.002-.002 1.414-1.415 2.121 2.122 1.415-1.415 4.242 4.243zm-8.02 4.243 1.414 1.414 4.243-4.242 1.414 1.414 1.414-1.414 2.122 2.12-1.414 1.415-.002.002.002.002-4.242 4.243-1.414-1.414 4.242-4.243-.002-.002.002-.003-1.414-1.414-2.122 2.122z"/>
          </svg>
        </a>
        <a href="mailto:williancard123@gmail.com" className="social-icon" aria-label="Email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
      </div>
      <div className="hero-cta-buttons">
        <a href="https://www.ecotechamazonia.com.br" target="_blank" rel="noopener noreferrer" className="cta-button">
          Ecotech Amazônia
        </a>
        <a href="https://github.com/williancarddd" target="_blank" rel="noopener noreferrer" className="cta-button">
          Projetos Open Source
        </a>
        <a 
          href="mailto:williancard123@gmail.com?subject=Consulta%20sobre%20Consultoria%20em%20Tecnologia%20e%20IA&body=Olá%20William,%0D%0A%0D%0AGostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20consultoria%20em%20tecnologia%20e%20inteligência%20artificial.%0D%0A%0D%0A[Descreva%20brevemente%20sua%20necessidade%20ou%20projeto]%0D%0A%0D%0AAtenciosamente," 
          className="cta-button cta-consulting"
        >
          Consultoria
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

import { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-header">
          <div className="hero-text">
            <h1 className="hero-name">William Cardoso Barbosa</h1>
            <p className="hero-title">
              Mestrando em Ciências da Computação e Matemática Computacional
            </p>
            <p className="hero-affiliation">
              Instituto de Ciências Matemáticas e de Computação - Universidade de São Paulo
            </p>
          </div>
          <div className="hero-photo">
            {!imageError ? (
              <img 
                src="/profile-photo.jpg" 
                alt="William Cardoso Barbosa" 
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="photo-placeholder">
                <span>Foto</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="hero-intro">
          <p>
            Sou pesquisador e desenvolvedor em Ciência da Computação, atuando em processamento de 
            linguagem natural, visão computacional e projeto de sistemas. Atualmente sou mestrando 
            no <a href="https://www.icmc.usp.br" target="_blank" rel="noopener noreferrer">ICMC USP</a>, 
            sob orientação da <a href="#" target="_blank" rel="noopener noreferrer">Prof. Solange Oliveira Rezende</a>, 
            desenvolvendo pesquisa em análise de sentimentos em feedbacks do domínio financeiro utilizando 
            inteligência artificial em parceria com a Birdie.ai.
          </p>
          <p>
            Minhas áreas de interesse incluem <strong>processamento de linguagem natural, visão computacional, 
            aprendizado de máquina, deep learning e desenvolvimento de sistemas web</strong>. Tenho experiência 
            em projetos de pesquisa aplicados à saúde pública, educação e inovação tecnológica na Amazônia.
          </p>
          <p>
            Anteriormente, atuei como pesquisador na <a href="https://www.fiocruz.br" target="_blank" rel="noopener noreferrer">Fiocruz Rondônia</a>, 
            desenvolvendo métodos de detecção de malária e a aplicação web EggsCount-AI para contagem automática 
            de ovos de mosquitos. Sou co-fundador da <a href="https://www.ecotechamazonia.com.br" target="_blank" rel="noopener noreferrer">Ecotech Amazônia</a>, 
            empresa voltada ao fortalecimento tecnológico regional.
          </p>
        </div>

        <div className="hero-links">
          <a href="mailto:williancard123@gmail.com">williancard123@gmail.com</a>
          <a href="https://github.com/williancarddd" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="http://lattes.cnpq.br/8165329615542562" target="_blank" rel="noopener noreferrer">
            Lattes
          </a>
          <a href="https://orcid.org/0000-0003-2067-4857" target="_blank" rel="noopener noreferrer">
            ORCID
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

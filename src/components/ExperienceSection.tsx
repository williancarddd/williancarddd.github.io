import './ExperienceSection.css';

interface Experience {
  position: string;
  institution: string;
  period: string;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      position: 'Pesquisador',
      institution: 'Universidade de São Paulo (USP) - Instituto de Ciências Matemáticas e de Computação',
      period: '2025 - Atual'
    },
    {
      position: 'Pesquisador',
      institution: 'Fundação para o Desenvolvimento Científico e Tecnológico em Saúde (FIOTEC) / Fiocruz Rondônia',
      period: '2023 - 2025'
    },
    {
      position: 'Co-fundador e Gerente de Projetos',
      institution: 'Ecotech Amazônia',
      period: '2024 - Atual'
    },
    {
      position: 'Full Stack Developer',
      institution: 'Goat Tech (EUA)',
      period: 'Remoto'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="section-icon">💼</span>
          Experiência Profissional
        </h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <p className="experience-text">{exp.position}, {exp.institution}</p>
                <span className="experience-period">{exp.period}</span>
              </div>
              {index < experiences.length - 1 && <div className="item-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

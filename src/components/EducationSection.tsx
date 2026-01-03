import './EducationSection.css';

interface Education {
  degree: string;
  institution: string;
  period: string;
  advisor?: string;
}

const EducationSection = () => {
  const education: Education[] = [
    {
      degree: 'Mestrado em Ciências da Computação e Matemática Computacional',
      institution: 'Universidade de São Paulo (USP)',
      period: '2025 - Atual',
      advisor: 'Solange Oliveira Rezende'
    },
    {
      degree: 'Especialização em Inteligência Artificial Aplicada',
      institution: 'Universidade Federal do Paraná (UFPR)',
      period: '2025',
    },
    {
      degree: 'Graduação em Ciência da Computação',
      institution: 'Universidade Federal de Rondônia (UNIR)',
      period: '2021 - 2024',
      advisor: 'Jonathan da Silva Ramos'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="section-icon">🎓</span>
          Formação Acadêmica
        </h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <div className="education-content">
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-degree">{edu.degree}</p>
                  {edu.advisor && (
                    <p className="education-advisor">Orientador: {edu.advisor}</p>
                  )}
                </div>
                <span className="education-period">{edu.period}</span>
              </div>
              {index < education.length - 1 && <div className="item-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

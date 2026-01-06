import './ProjectsSection.css';

interface ResearchArea {
  title: string;
  institution: string;
  period: string;
  description: string;
  keywords: string[];
  supervisor?: string;
}

const ProjectsSection = () => {
  const researchAreas: ResearchArea[] = [
    {
      title: 'Análise de Sentimentos e Mineração de Opinião',
      institution: 'ICMC - Universidade de São Paulo (USP)',
      period: '2025 - Atual',
      description: 'Pesquisa em análise multitarefa de feedbacks de usuários utilizando Large Language Models. Desenvolvimento de sistemas de mineração de dados para extração de insights em feedbacks do domínio financeiro.',
      keywords: ['Mineração de Dados', 'Large Language Models', 'Análise de Sentimentos', 'NLP', 'Machine Learning'],
      supervisor: 'Prof. Solange Oliveira Rezende'
    },
    {
      title: 'Visão Computacional e Saúde Pública',
      institution: 'Fiocruz Rondônia',
      period: '2023 - 2025',
      description: 'Desenvolvimento de métodos de detecção automatizada e contagem de ovos de mosquitos utilizando visão computacional e deep learning. Aplicação de técnicas de mineração de dados em imagens microscópicas para diagnóstico auxiliado por computador.',
      keywords: ['Visão Computacional', 'Deep Learning', 'Mineração de Dados', 'Saúde Pública', 'Processamento de Imagens'],
      supervisor: 'Dr. Fernando Berton Zanchi'
    }
  ];

  return (
    <section className="research-section">
      <h2 className="section-title">Áreas de Atuação e Pesquisa</h2>
      <div className="research-areas">
        {researchAreas.map((area, index) => (
          <div key={index} className="research-card">
            <div className="research-header">
              <h3 className="research-title">{area.title}</h3>
              <span className="research-period">{area.period}</span>
            </div>
            <p className="research-institution">{area.institution}</p>
            {area.supervisor && (
              <p className="research-supervisor">Orientador: {area.supervisor}</p>
            )}
            <p className="research-description">{area.description}</p>
            <div className="research-keywords">
              {area.keywords.map((keyword, idx) => (
                <span key={idx} className="keyword-tag">{keyword}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="research-cta">
        <p className="cta-text">Para conhecer mais sobre minha trajetória acadêmica e projetos:</p>
        <div className="cta-links">
          <a 
            href="http://lattes.cnpq.br/8165329615542562" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-link"
          >
            Currículo Lattes →
          </a>
          <a 
            href="https://www.linkedin.com/in/williancarddd" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-link"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

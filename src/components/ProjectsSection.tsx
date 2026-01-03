import './ProjectsSection.css';

interface Project {
  name: string;
  description: string;
  links?: {
    github?: string;
    demo?: string;
    article?: string;
  };
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      name: 'EggsCount-AI / Eggs Fiocruz',
      description: 'Aplicação web para contagem automática de ovos de mosquitos do Aedes aegypti utilizando visão computacional.',
      links: {
        github: 'https://github.com/williancarddd/eggs-fiocruz-back'
      }
    },
    {
      name: 'Detecção Automatizada de Malária',
      description: 'Sistema de diagnóstico auxiliado por computador para detecção de células infectadas por malária em imagens microscópicas.',
      links: {
        article: 'https://ri.unir.br/jspui/handle/123456789/5661?mode=full'
      }
    },
    {
      name: 'IA-Libras - Inclusão de Surdos',
      description: 'Sistema de visão computacional para detecção e criação de palavras a partir de gestos de libras.',
      links: {
        github: 'https://github.com/williancarddd/IA-Libras.git'
      }
    },
    {
      name: 'Framework ABSA',
      description: 'Sistema de análise de sentimentos e mineração de opinião em feedbacks corporativos, principalmente no domínio financeiro.'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="section-icon">💡</span>
          Projetos
        </h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              {project.links && (
                <div className="project-links">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="link-tag">
                      🔗 GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="link-tag">
                      🔗 Site
                    </a>
                  )}
                  {project.links.article && (
                    <a href={project.links.article} target="_blank" rel="noopener noreferrer" className="link-tag">
                      📄 Artigo
                    </a>
                  )}
                </div>
              )}
              {index < projects.length - 1 && <div className="item-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

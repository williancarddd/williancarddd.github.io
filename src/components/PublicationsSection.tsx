import './PublicationsSection.css';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  venueFull: string;
  year: string;
  comingSoon?: boolean;
  links?: {
    paper?: string;
    arxiv?: string;
    slides?: string;
    project?: string;
    doi?: string;
    bibtex?: string;
  };
}

const PublicationsSection = () => {
  const publications: Publication[] = [
    {
      title: 'Contador de ovos de mosquito em palhetas de aucatex',
      authors: 'BARBOSA, William Cardoso',
      venue: 'Em Breve',
      venueFull: 'Em breve',
      year: '2025',
      comingSoon: true
    },
    {
      title: 'Impacto do Tamanho da Região de Interesse no Diagnóstico Auxiliado por Computador de Células Infectadas por Malária: Aprendizado Profundo vs Tradicional',
      authors: 'BARBOSA, William Cardoso',
      venue: 'TCC',
      venueFull: 'Trabalho de Conclusão de Curso - Graduação em Ciência da Computação, Universidade Federal de Rondônia (UNIR)',
      year: '2024',
      links: {
        paper: 'https://ri.unir.br/jspui/handle/123456789/5661'
      }
    },
    {
      title: 'Modelo de Chatbot para Aprendizado da Cultura Beradeira',
      authors: 'BARBOSA, W. C.; SILVA, R. A.; CAMPOS, S. P.; TOBIAS, N. B.; CUNHA, L. M.',
      venue: 'VI CONGRESSO AMAZÔNICO DE EDUCAÇÃO A DISTÂNCIA',
      venueFull: 'VI Congresso Amazônico de Educação a Distância',
      year: '2023'
    }
  ];

  return (
    <section id="publications" className="publications-section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="section-icon">⭐</span>
          Publicações Selecionadas
        </h2>
        {publications.length > 0 ? (
          <div className="publications-list">
            {publications.map((pub, index) => (
              <div key={index} className="publication-item">
                <h3 className="publication-title">{pub.title}</h3>
                <p className="publication-authors">{pub.authors}</p>
                <div className="publication-venue-info">
                  {pub.comingSoon ? (
                    <span className="venue-tag coming-soon">{pub.venue}</span>
                  ) : (
                    <span className="venue-tag">{pub.venue}</span>
                  )}
                  <span className="venue-full">{pub.venueFull}{pub.year && `, ${pub.year}`}</span>
                </div>
                {pub.links && (
                  <div className="publication-links">
                    {pub.links.paper && (
                      <a href={pub.links.paper} target="_blank" rel="noopener noreferrer" className="link-tag">
                        📄 Paper
                      </a>
                    )}
                    {pub.links.arxiv && (
                      <a href={pub.links.arxiv} target="_blank" rel="noopener noreferrer" className="link-tag">
                        📄 arXiv
                      </a>
                    )}
                    {pub.links.slides && (
                      <a href={pub.links.slides} target="_blank" rel="noopener noreferrer" className="link-tag">
                        📊 Slides
                      </a>
                    )}
                    {pub.links.project && (
                      <a href={pub.links.project} target="_blank" rel="noopener noreferrer" className="link-tag">
                        🔗 Project
                      </a>
                    )}
                    {pub.links.doi && (
                      <a href={pub.links.doi} target="_blank" rel="noopener noreferrer" className="link-tag">
                        🔗 DOI
                      </a>
                    )}
                    {pub.links.bibtex && (
                      <a href={pub.links.bibtex} target="_blank" rel="noopener noreferrer" className="link-tag">
                        📝 BibTex
                      </a>
                    )}
                  </div>
                )}
                {index < publications.length - 1 && <div className="item-divider"></div>}
              </div>
            ))}
          </div>
        ) : (
          <p className="no-publications">Nenhuma publicação listada no momento.</p>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;

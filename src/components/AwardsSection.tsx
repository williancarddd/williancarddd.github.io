import './AwardsSection.css';

interface Award {
  name: string;
  year: string;
}

const AwardsSection = () => {
  const awards: Award[] = [
    {
      name: 'Finalista Nacional na Maratona de Programação "Treinamento para Programação Competitiva"',
      year: '2023'
    },
    {
      name: 'Hackathon Rondônia Rural Show',
      year: '2023'
    },
    {
      name: 'Rocket Amazônia Tech Reality',
      year: '2024'
    }
  ];

  return (
    <section id="awards" className="awards-section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="section-icon">🏆</span>
          Prêmios e Distinções
        </h2>
        {awards.length > 0 ? (
          <div className="awards-list">
            {awards.map((award, index) => (
              <div key={index} className="award-item">
                <div className="award-header">
                  <p className="award-name">{award.name}</p>
                  <span className="award-year">{award.year}</span>
                </div>
                {index < awards.length - 1 && <div className="item-divider"></div>}
              </div>
            ))}
          </div>
        ) : (
          <p className="no-awards">Nenhum prêmio listado no momento.</p>
        )}
      </div>
    </section>
  );
};

export default AwardsSection;

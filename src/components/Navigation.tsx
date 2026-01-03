import './Navigation.css';

const Navigation = () => {
  const menuItems = [
    { id: 'hero', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'education', label: 'Formação' },
    { id: 'experience', label: 'Experiência' },
    { id: 'publications', label: 'Publicações' },
    { id: 'awards', label: 'Prêmios' },
    { id: 'projects', label: 'Projetos' }
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#hero" onClick={(e) => handleClick(e, 'hero')}>
            William Cardoso
          </a>
        </div>
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={(e) => handleClick(e, item.id)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;


import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import PublicationsSection from './components/PublicationsSection';
import AwardsSection from './components/AwardsSection';
import ProjectsSection from './components/ProjectsSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <HeroSection />
        <div className="two-column-section">
          <div className="column-left">
            <EducationSection />
            <AwardsSection />
          </div>
          <div className="column-right">
            <ExperienceSection />
          </div>
        </div>
        <PublicationsSection />
        <ProjectsSection />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>Copyright © {new Date().getFullYear()} William Cardoso Barbosa. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

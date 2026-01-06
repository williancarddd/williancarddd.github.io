import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import Particles from './components/Particles';
import './App.css';

function App() {
  return (
    <div className="app">
      <Particles />
      <div className="background-patterns">
        <div className="pattern pattern-top-right"></div>
        <div className="pattern pattern-bottom-right"></div>
      </div>
      <main>
        <div className="main-container">
          <HeroSection />
          <ProjectsSection />
        </div>
      </main>
      <footer className="footer">
        <p>William Cardoso Barbosa - All rights reserved © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;

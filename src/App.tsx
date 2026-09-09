import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Certificates } from './pages/Certificates';
import { Analytics } from '@vercel/analytics/react';

export function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
      />

      <div style={{ flex: 1 }}>
        {currentTab === 'home' && (
          <Home
            onNavigateProjects={() => setCurrentTab('projects')}
            onNavigateAbout={() => setCurrentTab('about')}
          />
        )}
        {currentTab === 'projects' && <Projects />}
        {currentTab === 'about' && <About />}
        {currentTab === 'certificates' && <Certificates />}
      </div>
return (
  <div className="app-container">
    <Header currentTab={currentTab} onSelectTab={setCurrentTab} />
    {/* resto do seu conteúdo */}
    
    <Analytics />
  </div>
);
      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
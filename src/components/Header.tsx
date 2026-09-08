import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  Disc,
  Headphones,
  Gamepad2,
  Wrench,
  Palette,
  Camera,
  Compass,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
}

const HOBBY_ICONS = [
  Disc, Headphones, Gamepad2, Wrench, Palette, Camera, Compass
];

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab }) => {
  const [hobbyIdx, setHobbyIdx] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileContactSubOpen, setIsMobileContactSubOpen] = useState(false);

  const contactRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const rotateHobby = () => {
    setIsSpinning(true);
    setHobbyIdx((prev) => (prev + 1) % HOBBY_ICONS.length);
    setTimeout(() => setIsSpinning(false), 650);
  };

  // Timer de 7 segundos do Hobby ativo no Desktop e Mobile
  useEffect(() => {
    const timer = setInterval(() => {
      rotateHobby();
    }, 7000);
    return () => clearInterval(timer);
  }, [hobbyIdx]);

  // Fechar dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const CurrentHobbyIcon = HOBBY_ICONS[hobbyIdx];

  const handleMobileSelect = (tabId: string) => {
    onSelectTab(tabId);
    setIsMobileMenuOpen(false);
  };

  // Clique na barra do cabeçalho no mobile
  const handleHeaderClick = (e: React.MouseEvent) => {
    if (window.innerWidth <= 768) {
      const target = e.target as HTMLElement;
      if (target.closest('.mobile-menu-drawer')) return;
      setIsMobileMenuOpen((prev) => !prev);
    }
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'projects', label: 'Projetos' },
    { id: 'about', label: 'Sobre Mim' },
    { id: 'certificates', label: 'Certificados' },
  ];

  return (
    <header
      ref={headerRef}
      onClick={handleHeaderClick}
      className="site-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(7, 9, 19, 0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-glass)',
        padding: '0.85rem 1.75rem',
        userSelect: 'none'
      }}
    >
      <div
        className="header-inner-container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Botão de Hobbies (Centralizado no mobile via CSS) */}
        <div className="hobby-container" style={{ display: 'flex', alignItems: 'center' }}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (window.innerWidth <= 768) {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              } else {
                rotateHobby();
              }
            }}
            title="Alternar Hobbies (Automático a cada 7s)"
            className="transition-smooth"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: isMobileMenuOpen 
                ? 'var(--accent-gradient)' 
                : 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
              border: '1px solid var(--border-glass)',
              color: isMobileMenuOpen ? '#fff' : 'var(--accent-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 0 15px rgba(56, 189, 248, 0.15)',
            }}
          >
            <div className={`hobby-rotate ${isSpinning ? 'spinning' : ''}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CurrentHobbyIcon size={20} />
            </div>
          </div>
        </div>

        {/* Centro: Navegação Desktop */}
        <nav className="desktop-nav-menu" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTab(item.id);
                }}
                className="transition-smooth"
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.98rem',
                  cursor: 'pointer',
                  padding: '0.6rem 0',
                  position: 'relative',
                  outline: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.label}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '0px',
                    left: 0,
                    width: '100%',
                    height: '2.5px',
                    borderRadius: '999px',
                    background: isActive ? 'var(--accent-gradient)' : 'transparent',
                    boxShadow: isActive ? '0 0 10px rgba(56, 189, 248, 0.8)' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                />
              </button>
            );
          })}
        </nav>

        {/* Direita: Botão Contato Desktop */}
        <div className="desktop-contact-wrapper" style={{ position: 'relative' }} ref={contactRef}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsContactOpen(!isContactOpen);
            }}
            className="transition-smooth"
            style={{
              backgroundColor: isContactOpen ? 'var(--accent-gradient)' : 'rgba(168, 85, 247, 0.12)',
              border: '1px solid rgba(168, 85, 247, 0.4)',
              color: '#fff',
              padding: '0.55rem 1.1rem',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: isContactOpen ? '0 0 16px rgba(168, 85, 247, 0.4)' : 'none',
            }}
          >
            Contato
            <ChevronDown
              size={15}
              style={{
                transform: isContactOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.25s',
              }}
            />
          </button>

          {isContactOpen && (
            <div
              className="glass-panel"
              style={{
                position: 'absolute',
                top: 'calc(100% + 10px)',
                right: 0,
                width: '210px',
                borderRadius: '12px',
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                boxShadow: '0 12px 35px rgba(0,0,0,0.6)',
                border: '1px solid var(--border-glass)',
                zIndex: 110,
              }}
            >
              <a
                href="https://www.linkedin.com/in/joaopadilhaa/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsContactOpen(false)}
                className="transition-smooth"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.6rem 0.8rem',
                  borderRadius: '8px',
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  backgroundColor: 'rgba(255,255,255,0.03)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LinkedIn</span>
                </div>
                <ExternalLink size={13} color="var(--text-secondary)" />
              </a>

              <a
                href="https://github.com/joaopmartins1608"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsContactOpen(false)}
                className="transition-smooth"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.6rem 0.8rem',
                  borderRadius: '8px',
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  backgroundColor: 'rgba(255,255,255,0.03)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub</span>
                </div>
                <ExternalLink size={13} color="var(--text-secondary)" />
              </a>

              <a
                href="mailto:joaopedropadilha.m@gmail.com"
                onClick={() => setIsContactOpen(false)}
                className="transition-smooth"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.6rem 0.8rem',
                  borderRadius: '8px',
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  backgroundColor: 'rgba(255,255,255,0.03)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Mail size={17} color="var(--accent-blue)" />
                  <span>Enviar E-mail</span>
                </div>
                <ExternalLink size={13} color="var(--text-secondary)" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Dropdown Mobile: Lista Vertical */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-drawer"
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(8, 10, 20, 0.98)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid var(--border-glass)',
            padding: '1.2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.7)',
            animation: 'fadeInMenu 0.25s ease-out'
          }}
        >
          {/* 1. Início */}
          <button
            onClick={() => handleMobileSelect('home')}
            style={{
              background: currentTab === 'home' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
              border: currentTab === 'home' ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid transparent',
              borderRadius: '10px',
              color: currentTab === 'home' ? 'var(--accent-blue)' : '#e2e8f0',
              textAlign: 'left',
              padding: '0.85rem 1.1rem',
              fontSize: '1rem',
              fontWeight: currentTab === 'home' ? 700 : 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <span>Início</span>
            {currentTab === 'home' && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)' }} />}
          </button>

          {/* 2. Projetos */}
          <button
            onClick={() => handleMobileSelect('projects')}
            style={{
              background: currentTab === 'projects' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
              border: currentTab === 'projects' ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid transparent',
              borderRadius: '10px',
              color: currentTab === 'projects' ? 'var(--accent-blue)' : '#e2e8f0',
              textAlign: 'left',
              padding: '0.85rem 1.1rem',
              fontSize: '1rem',
              fontWeight: currentTab === 'projects' ? 700 : 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <span>Projetos</span>
            {currentTab === 'projects' && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)' }} />}
          </button>

          {/* 3. Sobre Mim */}
          <button
            onClick={() => handleMobileSelect('about')}
            style={{
              background: currentTab === 'about' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
              border: currentTab === 'about' ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid transparent',
              borderRadius: '10px',
              color: currentTab === 'about' ? 'var(--accent-blue)' : '#e2e8f0',
              textAlign: 'left',
              padding: '0.85rem 1.1rem',
              fontSize: '1rem',
              fontWeight: currentTab === 'about' ? 700 : 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <span>Sobre Mim</span>
            {currentTab === 'about' && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)' }} />}
          </button>

          {/* 4. Certificados */}
          <button
            onClick={() => handleMobileSelect('certificates')}
            style={{
              background: currentTab === 'certificates' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
              border: currentTab === 'certificates' ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid transparent',
              borderRadius: '10px',
              color: currentTab === 'certificates' ? 'var(--accent-blue)' : '#e2e8f0',
              textAlign: 'left',
              padding: '0.85rem 1.1rem',
              fontSize: '1rem',
              fontWeight: currentTab === 'certificates' ? 700 : 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <span>Certificados</span>
            {currentTab === 'certificates' && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)' }} />}
          </button>

          {/* 5. Contato */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <button
              onClick={() => setIsMobileContactSubOpen(!isMobileContactSubOpen)}
              style={{
                background: isMobileContactSubOpen ? 'rgba(168, 85, 247, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                border: isMobileContactSubOpen ? '1px solid rgba(168, 85, 247, 0.35)' : '1px solid transparent',
                borderRadius: '10px',
                color: isMobileContactSubOpen ? 'var(--accent-purple)' : '#e2e8f0',
                textAlign: 'left',
                padding: '0.85rem 1.1rem',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>Contato</span>
              <ChevronDown
                size={16}
                style={{
                  transform: isMobileContactSubOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s ease'
                }}
              />
            </button>

            {isMobileContactSubOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingLeft: '0.5rem' }}>
                <a
                  href="https://www.linkedin.com/in/joaopadilhaa/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.7rem 0.9rem',
                    borderRadius: '8px',
                    color: 'var(--text-main)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    backgroundColor: 'rgba(255,255,255,0.03)'
                  }}
                >
                  <span>LinkedIn</span>
                  <ExternalLink size={14} color="var(--text-secondary)" />
                </a>

                <a
                  href="https://github.com/joaopmartins1608"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.7rem 0.9rem',
                    borderRadius: '8px',
                    color: 'var(--text-main)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    backgroundColor: 'rgba(255,255,255,0.03)'
                  }}
                >
                  <span>GitHub</span>
                  <ExternalLink size={14} color="var(--text-secondary)" />
                </a>

                <a
                  href="mailto:joaopedropadilha.m@gmail.com"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.7rem 0.9rem',
                    borderRadius: '8px',
                    color: 'var(--text-main)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    backgroundColor: 'rgba(255,255,255,0.03)'
                  }}
                >
                  <span>Enviar E-mail</span>
                  <ExternalLink size={14} color="var(--text-secondary)" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
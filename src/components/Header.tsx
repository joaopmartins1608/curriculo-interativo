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
  const contactRef = useRef<HTMLDivElement>(null);

  const rotateHobby = () => {
    setIsSpinning(true);
    setHobbyIdx((prev) => (prev + 1) % HOBBY_ICONS.length);
    setTimeout(() => setIsSpinning(false), 650);
  };

  // Timer de 7 segundos do Hobby
  useEffect(() => {
    const timer = setInterval(() => {
      rotateHobby();
    }, 7000);
    return () => clearInterval(timer);
  }, [hobbyIdx]);

  // Fechar dropdown de contato ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const CurrentHobbyIcon = HOBBY_ICONS[hobbyIdx];

  // Ordem correta solicitada
  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'projects', label: 'Projetos' },
    { id: 'about', label: 'Sobre Mim' },
    { id: 'certificates', label: 'Certificados' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(7, 9, 19, 0.88)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-glass)',
      padding: '0.9rem 2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Esquerda: Botão de Hobbies com timer de 7s */}
        <button
          onClick={rotateHobby}
          title="Alternar Hobbies (Automático a cada 7s)"
          className="transition-smooth"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
            border: '1px solid var(--border-glass)',
            color: 'var(--accent-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0,
            outline: 'none',
            boxShadow: '0 0 15px rgba(56, 189, 248, 0.15)'
          }}
        >
          <div className={`hobby-rotate ${isSpinning ? 'spinning' : ''}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CurrentHobbyIcon size={20} />
          </div>
        </button>

        {/* Centro: Navegação com Sublinhado Ativo Visível */}
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
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
                  outline: 'none'
                }}
              >
                {item.label}
                {/* Linha de Sublinhado com Gradiente */}
                <span style={{
                  position: 'absolute',
                  bottom: '0px',
                  left: 0,
                  width: '100%',
                  height: '2.5px',
                  borderRadius: '999px',
                  background: isActive ? 'var(--accent-gradient)' : 'transparent',
                  boxShadow: isActive ? '0 0 10px rgba(56, 189, 248, 0.8)' : 'none',
                  transition: 'all 0.3s ease'
                }} />
              </button>
            );
          })}
        </nav>

        {/* Direita: Botão Contato que expande opções de contato */}
        <div style={{ position: 'relative' }} ref={contactRef}>
          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
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
              boxShadow: isContactOpen ? '0 0 16px rgba(168, 85, 247, 0.4)' : 'none'
            }}
          >
            Contato
            <ChevronDown size={15} style={{ transform: isContactOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }} />
          </button>

          {/* Menu Dropdown de Contatos */}
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
                zIndex: 110
              }}
            >
              {/* LinkedIn */}
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
                  backgroundColor: 'rgba(255,255,255,0.03)'
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

              {/* GitHub */}
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
                  backgroundColor: 'rgba(255,255,255,0.03)'
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

              {/* E-mail */}
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
                  backgroundColor: 'rgba(255,255,255,0.03)'
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
    </header>
  );
};
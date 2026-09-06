import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Code2,
  Database,
  Terminal,
  Cpu,
  Layers,
  Braces,
  Binary,
  Wrench,
  Globe,
  Flame,
  ExternalLink
} from 'lucide-react';

interface HomeProps {
  onNavigateProjects: () => void;
  onNavigateAbout: () => void;
}

const words = ['Programador', 'Designer', 'Editor', 'Fotógrafo', 'Maker'];

const TECH_ICONS = [
  Code2, Database, Terminal, Cpu, Layers,
  Braces, Binary, Wrench, Globe, Flame
];

// Apenas os 4 projetos oficiais com repositórios ativos
const featuredProjects = [
  {
    title: 'DevLog & README Architect',
    stack: 'React • TypeScript • Vite • Lucide',
    desc: 'Ferramenta utilitária client-side para arquitetura de software e geração de documentações padronizadas em Markdown com download instantâneo.',
    github: 'https://github.com/joaopmartins1608/devlog-readme-architect'
  },
  {
    title: 'Web Image Optimizer & Converter',
    stack: 'React • TypeScript • Canvas API • FileReader',
    desc: 'Compressão e conversão de imagens para WebP no navegador com cálculo dinâmico de payload e privacidade total sem upload para servidores.',
    github: 'https://github.com/joaopmartins1608/web-image-optimizer'
  },
  {
    title: 'Focus & Habit Tracker',
    stack: 'React • TypeScript • Web Storage API',
    desc: 'Temporizador de foco adaptativo com ciclos Pomodoro, categorização de contexto e persistência local de métricas no navegador.',
    github: 'https://github.com/joaopmartins1608/focus-habit-tracker'
  },
  {
    title: 'Gestor de Despesas Domésticas',
    stack: '.NET (C#) • React • TypeScript • SQLite',
    desc: 'Arquitetura full-stack corporativa com persistência relacional em SQLite e interface reativa moderna para controle financeiro completo.',
    github: 'https://github.com/joaopmartins1608/teste-controle-gastos'
  }
];

export const Home: React.FC<HomeProps> = ({ onNavigateProjects, onNavigateAbout }) => {
  // 1. Efeito Typewriter
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const speed = isDeleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % words.length);
      } else {
        setText(current.substring(0, isDeleting ? text.length - 1 : text.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIdx]);

  // 2. Bolinhas em órbita atômica que abrem e fecham
  const [activeNodes, setActiveNodes] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const count = Math.floor(Math.random() * 3) + 2;
      const picked: number[] = [];
      while (picked.length < count) {
        const rand = Math.floor(Math.random() * 10);
        if (!picked.includes(rand)) picked.push(rand);
      }
      setActiveNodes(picked);

      setTimeout(() => {
        setActiveNodes([]);
      }, 5000);
    }, 7500);

    return () => clearInterval(interval);
  }, []);

  // 3. Carrossel de 10 segundos com deslize lateral suave
  const [carouselIdx, setCarouselIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIdx((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(timer);
  }, [carouselIdx]);

  const currentProject = featuredProjects[carouselIdx];

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '5rem' }}>
      
      {/* Hero Section */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        alignItems: 'center',
        gap: '3.5rem'
      }}>
        {/* Coluna Esquerda */}
        <div>
          <span style={{
            color: 'var(--accent-blue)',
            fontWeight: 600,
            fontSize: '0.95rem',
            letterSpacing: '0.5px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <Sparkles size={16} /> Olá, me chamo João Pedro
          </span>

          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, margin: '0.8rem 0 1.2rem', lineHeight: 1.15 }}>
            Eu sou um <br />
            <span style={{
              background: 'linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {text}
            </span>
            <span className="typing-cursor" />
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '480px', marginBottom: '2rem' }}>
            Estudante de Sistemas de Informação unindo a lógica rigorosa do desenvolvimento full-stack à sensibilidade visual do design.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={onNavigateAbout}
              className="transition-smooth"
              style={{
                backgroundColor: 'rgba(168, 85, 247, 0.12)',
                color: '#fff',
                border: '1px solid rgba(168, 85, 247, 0.4)',
                padding: '0.8rem 1.8rem',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 18px rgba(168, 85, 247, 0.2)'
              }}
            >
              Sobre Mim <ArrowRight size={18} color="var(--accent-blue)" />
            </button>
          </div>
        </div>

        {/* Coluna Direita: Modelo Híbrido Rutherford + Bohr com Float e Abre/Fecha */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '420px', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Linhas de Bohr */}
            <div style={{
              position: 'absolute',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              border: '1px dashed rgba(56, 189, 248, 0.22)'
            }} />
            <div style={{
              position: 'absolute',
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              border: '1px dashed rgba(168, 85, 247, 0.22)'
            }} />

            {/* Linhas de Rutherford */}
            <div style={{
              position: 'absolute',
              width: '390px',
              height: '390px',
              borderRadius: '50%',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              transform: 'rotate(0deg) rotateX(70deg)'
            }} />
            <div style={{
              position: 'absolute',
              width: '390px',
              height: '390px',
              borderRadius: '50%',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              transform: 'rotate(60deg) rotateX(70deg)'
            }} />
            <div style={{
              position: 'absolute',
              width: '390px',
              height: '390px',
              borderRadius: '50%',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              transform: 'rotate(-60deg) rotateX(70deg)'
            }} />

            {/* As 10 Bolinhas com Oscilação e Abre/Fecha */}
            <div style={{ position: 'absolute', inset: 0 }}>
              {TECH_ICONS.map((IconComp, idx) => {
                const angle = (idx / 10) * 2 * Math.PI;
                const radius = idx % 2 === 0 ? 144 : 190;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isOpen = activeNodes.includes(idx);
                const floatDuration = 3 + (idx % 3) * 1.5;

                return (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      top: `calc(50% + ${y}px - ${isOpen ? '21px' : '9px'})`,
                      left: `calc(50% + ${x}px - ${isOpen ? '21px' : '9px'})`,
                      animation: `electronFloat ${floatDuration}s ease-in-out infinite alternate`,
                      zIndex: isOpen ? 25 : 6
                    }}
                  >
                    <div
                      style={{
                        width: isOpen ? '42px' : '18px',
                        height: isOpen ? '42px' : '18px',
                        borderRadius: '50%',
                        background: isOpen
                          ? 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))'
                          : 'rgba(56, 189, 248, 0.2)',
                        border: isOpen
                          ? '2px solid #fff'
                          : '1.5px solid rgba(168, 85, 247, 0.6)',
                        boxShadow: isOpen
                          ? '0 0 25px rgba(56, 189, 248, 0.8), 0 0 35px rgba(168, 85, 247, 0.6)'
                          : '0 0 10px rgba(56, 189, 248, 0.4)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: isOpen ? 'scale(1.15)' : 'scale(1)',
                        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    >
                      {isOpen && <IconComp size={20} />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Núcleo Central: Foto */}
            <div style={{
              width: '210px',
              height: '210px',
              borderRadius: '50%',
              padding: '4px',
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
              boxShadow: '0 0 35px rgba(168, 85, 247, 0.35)',
              position: 'relative',
              zIndex: 10
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#0d1124'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                  alt="João Pedro"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de Projetos em Destaque com Deslize Suave */}
      <section className="glass-panel" style={{ borderRadius: '16px', padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={14} /> DESTAQUES AUTOMÁTICOS (10S)
            </span>
            <h2 style={{ fontSize: '1.5rem', marginTop: '0.2rem', color: '#fff' }}>Projetos Selecionados</h2>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => setCarouselIdx((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1))}
              className="transition-smooth"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-glass)',
                color: '#fff',
                padding: '0.5rem',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setCarouselIdx((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1))}
              className="transition-smooth"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-glass)',
                color: '#fff',
                padding: '0.5rem',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Card animado com a classe .slide-card-enter acionada pelo carouselIdx */}
        <div
          key={carouselIdx}
          className="slide-card-enter"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-glass)',
            borderRadius: '12px',
            padding: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div style={{ flex: '1 1 500px' }}>
            <span style={{ color: 'var(--accent-purple)', fontSize: '0.85rem', fontWeight: 600 }}>
              {currentProject.stack}
            </span>
            <h3 style={{ fontSize: '1.5rem', margin: '0.4rem 0 0.6rem', color: '#fff' }}>
              {currentProject.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              {currentProject.desc}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            <a
              href={currentProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-smooth"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-glass)',
                color: '#fff',
                padding: '0.65rem 1.1rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              Repositório <ExternalLink size={14} color="var(--text-secondary)" />
            </a>

            <button
              onClick={onNavigateProjects}
              className="transition-smooth"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--accent-blue)',
                color: 'var(--accent-blue)',
                padding: '0.65rem 1.2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}
            >
              Explorar Todos os Projetos
            </button>
          </div>
        </div>

        {/* 4 Indicadores */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
          {featuredProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCarouselIdx(idx)}
              style={{
                width: carouselIdx === idx ? '26px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: carouselIdx === idx ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
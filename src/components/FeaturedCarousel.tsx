import React, { useState, useEffect } from 'react';
import { ExternalLink, GitBranch, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  summary: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const FEATURED_PROJECTS: Project[] = [
  {
    id: 'devlog-readme-architect',
    title: 'DevLog & README Architect',
    summary: 'Aplicação client-side para arquitetura de software e geração padronizada de documentações técnicas em Markdown.',
    technologies: ['React', 'TypeScript', 'Vite', 'Lucide React'],
    githubUrl: 'https://github.com/joaopmartins1608/devlog-readme-architect'
  },
  {
    id: 'web-image-optimizer',
    title: 'Web Image Optimizer & Converter',
    summary: 'Compressor de imagens client-side de alta eficiência com conversão para WebP e cálculo dinâmico de payload via HTML5 Canvas.',
    technologies: ['React', 'TypeScript', 'Canvas API', 'FileReader'],
    githubUrl: 'https://github.com/joaopmartins1608/web-image-optimizer'
  },
  {
    id: 'focus-habit-tracker',
    title: 'Focus & Habit Tracker',
    summary: 'Temporizador de produtividade Pomodoro com categorização contextual e métricas salvas em localStorage.',
    technologies: ['React', 'TypeScript', 'Web Storage API'],
    githubUrl: 'https://github.com/joaopmartins1608/focus-habit-tracker'
  },
  {
    id: 'controle-gastos',
    title: 'Gestor de Controle de Gastos',
    summary: 'Sistema full-stack com arquitetura C# .NET e persistência SQLite no back-end com interface moderna em React.',
    technologies: ['C#', '.NET', 'SQLite', 'React'],
    githubUrl: 'https://github.com/joaopmartins1608/teste-controle-gastos'
  }
];

export const FeaturedCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play de 10 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FEATURED_PROJECTS.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? FEATURED_PROJECTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % FEATURED_PROJECTS.length);
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '850px', margin: '0 auto', overflow: 'hidden' }}>
      {/* Controles Laterais */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)' }} />
          Projetos em Destaque
        </h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={prevSlide}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-main)',
              borderRadius: '8px',
              padding: '0.4rem',
              cursor: 'pointer'
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-main)',
              borderRadius: '8px',
              padding: '0.4rem',
              cursor: 'pointer'
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Trilha de Slides com Deslizamento Lateral */}
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)',
          transform: `translateX(-${currentIndex * 100}%)`,
          width: '100%'
        }}
      >
        {FEATURED_PROJECTS.map((proj) => (
          <div
            key={proj.id}
            style={{
              minWidth: '100%',
              boxSizing: 'border-box',
              padding: '0.25rem'
            }}
          >
            <div
              className="glass-panel"
              style={{
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                position: 'relative'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-purple)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Case em Destaque
                </span>
                <h4 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '0.2rem' }}>{proj.title}</h4>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                {proj.summary}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {proj.technologies.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      color: 'var(--accent-blue)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px',
                      fontSize: '0.75rem'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    textDecoration: 'none',
                    color: '#fff',
                    background: 'rgba(255, 255, 255, 0.08)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}
                >
                  <GitBranch size={16} /> Ver Repositório
                </a>
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      textDecoration: 'none',
                      color: '#fff',
                      background: 'var(--accent-gradient)',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 600
                    }}
                  >
                    <ExternalLink size={16} /> Acessar Aplicação
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores & Barra de Progresso de 10 segundos */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
        {FEATURED_PROJECTS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: currentIndex === idx ? '28px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: currentIndex === idx ? 'var(--accent-blue)' : 'rgba(255,255,255,0.2)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>
    </div>
  );
};
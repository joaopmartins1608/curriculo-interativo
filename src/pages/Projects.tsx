import React, { useState } from 'react';
import { Filter, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  category: 'Ferramentas' | 'Software';
  stack: string;
  image: string;
  desc: string;
  github: string;
  featured?: boolean;
}

const allProjects: Project[] = [
  // --- Novos Projetos de Hoje (06/09) ---
  {
    title: 'IPv4 Subnet & CIDR Calculator',
    category: 'Ferramentas',
    stack: 'React • TypeScript • Vite',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    desc: 'Utilitário de redes para cálculo instantâneo de blocos CIDR (/0 a /32), máscaras decimais, endereços de rede, broadcast e dimensionamento de hosts utilizáveis.',
    github: 'https://github.com/joaopmartins1608/ipv4-subnet-calculator',
    featured: true
  },
  {
    title: 'JSON ↔ CSV Data Converter & Validator',
    category: 'Ferramentas',
    stack: 'React • TypeScript • Vite',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    desc: 'Ferramenta bidirecional para transformação e validação de estruturas tabulares e hierárquicas, inferência dinâmica de tipos primitivos e cópia com um clique.',
    github: 'https://github.com/joaopmartins1608/json-csv-data-converter',
    featured: true
  },
  {
    title: 'Dynamic KPI & SVG Sparkline Widget',
    category: 'Ferramentas',
    stack: 'React • TypeScript • SVG Nativo • Vite',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    desc: 'Componente analítico para visualização de métricas de desempenho com mapeamento matemático de séries temporais em SVG puro e cálculo de tendências.',
    github: 'https://github.com/joaopmartins1608/kpi-sparkline-widget',
    featured: true
  },
  {
    title: 'Data Integrity & Document Validator API',
    category: 'Software',
    stack: 'C# • .NET 8 • Minimal APIs • Swagger',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    desc: 'Web API RESTful de alta performance para geração e verificação de hashes criptográficos (SHA-256, SHA-512, MD5) e validação matemática de CPF/CNPJ.',
    github: 'https://github.com/joaopmartins1608/data-integrity-api',
    featured: true
  },

  // --- Projetos Anteriores ---
  {
    title: 'DevLog & README Architect',
    category: 'Ferramentas',
    stack: 'React • TypeScript • Vite • Lucide',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    desc: 'Ferramenta client-side reativa para estruturar decisões de arquitetura e gerar documentações padronizadas em Markdown com preview e download instantâneos.',
    github: 'https://github.com/joaopmartins1608/devlog-readme-architect'
  },
  {
    title: 'Web Image Optimizer & Converter',
    category: 'Ferramentas',
    stack: 'React • TypeScript • Canvas API • FileReader',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    desc: 'Compressor e conversor de imagens (WebP, PNG e JPEG) 100% privado e client-side via HTML5 Canvas, sem envio de arquivos para servidores externos.',
    github: 'https://github.com/joaopmartins1608/web-image-optimizer'
  },
  {
    title: 'Focus & Habit Tracker',
    category: 'Ferramentas',
    stack: 'React • TypeScript • Web Storage API',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
    desc: 'Temporizador Pomodoro adaptativo com gerenciamento rigoroso de intervalos, categorização por contexto de estudo e métricas persistidas no navegador.',
    github: 'https://github.com/joaopmartins1608/focus-habit-tracker'
  },
  {
    title: 'Gestor de Despesas Domésticas',
    category: 'Software',
    stack: '.NET (C#) • SQLite • React • TypeScript',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    desc: 'Arquitetura corporativa em C# com persistência relacional em SQLite e interface reativa moderna para controle financeiro completo.',
    github: 'https://github.com/joaopmartins1608/teste-controle-gastos'
  }
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'Todos' | 'Ferramentas' | 'Software'>('Todos');
  const filters: Array<'Todos' | 'Ferramentas' | 'Software'> = ['Todos', 'Ferramentas', 'Software'];

  const filteredProjects = activeFilter === 'Todos'
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3.5rem 2rem' }}>
      {/* Cabeçalho da Página e Filtros */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '0.5rem', color: '#fff' }}>
          Portfólio de Projetos
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
          Aplicações funcionais, ferramentas utilitárias e sistemas em produção.
        </p>

        {/* Filtros */}
        <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', marginRight: '0.4rem', fontSize: '0.9rem' }}>
            <Filter size={16} /> Filtros:
          </div>
          {filters.map((f) => {
            const isSelected = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="transition-smooth"
                style={{
                  backgroundColor: isSelected ? 'var(--accent-gradient)' : 'rgba(255, 255, 255, 0.04)',
                  color: isSelected ? '#fff' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid transparent' : '1px solid var(--border-glass)',
                  borderRadius: '999px',
                  padding: '0.45rem 1.1rem',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  boxShadow: isSelected ? '0 0 16px rgba(56, 189, 248, 0.35)' : 'none'
                }}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid de Cards dos Projetos */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
        gap: '2rem'
      }}>
        {filteredProjects.map((p, idx) => (
          <div
            key={idx}
            className="glass-panel transition-smooth"
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid var(--border-glass)'
            }}
          >
            <div>
              {/* Imagem com Badge */}
              <div style={{ height: '190px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(7, 9, 19, 0.88)',
                  backdropFilter: 'blur(8px)',
                  color: p.category === 'Ferramentas' ? 'var(--accent-blue)' : 'var(--accent-purple)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.35rem 0.8rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border-glass)'
                }}>
                  {p.category}
                </span>

                {p.featured && (
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'var(--accent-gradient)',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    letterSpacing: '0.5px'
                  }}>
                    NOVO
                  </span>
                )}
              </div>

              {/* Informações */}
              <div style={{ padding: '1.5rem 1.5rem 0' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.4rem', color: '#fff' }}>
                  {p.title}
                </h3>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--accent-blue)',
                  display: 'block',
                  marginBottom: '0.75rem'
                }}>
                  {p.stack}
                </span>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.55 }}>
                  {p.desc}
                </p>
              </div>
            </div>

            {/* Ação: Link Direto do GitHub */}
            <div style={{ padding: '1.5rem', display: 'flex', gap: '0.8rem' }}>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-smooth"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  padding: '0.55rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-glass)'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>Repositório</span>
                <ExternalLink size={13} color="var(--text-secondary)" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
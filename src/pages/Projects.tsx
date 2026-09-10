import React, { useState } from 'react';
import { Filter, ExternalLink, Eye, X } from 'lucide-react';

interface GalleryItem {
  url: string;
  versionBadge?: string;
  caption?: string;
}

interface VisualDetail {
  tool: 'Figma' | 'Photoshop';
  gallery: GalleryItem[];
  highlights: string[];
}

interface Project {
  title: string;
  category: 'Ferramentas' | 'Software' | 'Visual';
  stack: string;
  image: string;
  desc: string;
  github?: string;
  featured?: boolean;
  visualDetail?: VisualDetail;
}

const allProjects: Project[] = [
  // --- Projetos Visuais & Direção de Arte (Figma & Photoshop) ---
  {
    title: 'AURA — Spatial Soundscape & Focus',
    category: 'Visual',
    stack: 'Figma • Apple HIG • Design Systems • Dark Mode',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    desc: 'Sistema de interface mobile (iOS) focado em imersão sonora e foco contínuo, estruturado com microtipografia, cantos suaves e glassmorphism.',
    featured: true,
    visualDetail: {
      tool: 'Figma',
      gallery: [
        {
          url: '/projects/aura-home.png',
          versionBadge: 'Tela 01',
          caption: 'Home & Focus Spaces: seleção rápida de ambientes sonoros generativos e filtros dinâmicos.'
        },
        {
          url: '/projects/aura-player.png',
          versionBadge: 'Tela 02',
          caption: 'Spatial Audio Player: controles imersivos, scrubber minimalista e indicador de áudio espacial ativo.'
        }
      ],
      highlights: [
        'Arquitetura de informação e fluxo de reprodução contínua em 2 telas (Home e Player)',
        'Componentização com Auto-layout responsivo e conformidade com as Apple Human Interface Guidelines',
        'Contraste dinâmico, estados de áudio espacial ativo e paleta Dark Grafite/Neon sutil'
      ]
    }
  },
  {
    title: 'PURE SOUND — Key Visual & Direção de Arte',
    category: 'Visual',
    stack: 'Photoshop • Color Grading • Iluminação Bipartida • Composição',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
    desc: 'Peça promocional publicitária de alta fidelidade demonstrando processo de refinamento iterativo entre a versão conceitual (V1) e a final (V2).',
    featured: true,
    visualDetail: {
      tool: 'Photoshop',
      gallery: [
        {
          url: '/projects/hero-product-composition.png',
          versionBadge: 'V1 — Conceito Inicial',
          caption: 'Exploração de composição em dark mode, recorte do produto e primeiro contraste de iluminação dual-tone (magenta e ciano).'
        },
        {
          url: '/projects/hero-product-composition-definitive.jpeg',
          versionBadge: 'V2 — Refinamento Definitivo',
          caption: 'Correção e microtipografia (tracking no subtítulo ENGINEERED), iluminação volumétrica suavizada nas dobradiças e adição de sombra de oclusão para ancoragem de cena.'
        }
      ],
      highlights: [
        'Iluminação de contorno simulando estúdio físico (magenta profundo vs. ciano vibrante)',
        'Sombra de oclusão realista na base, eliminando o aspecto de recorte flutuante',
        'Iteração visual demonstrada: evolução da versão V1 conceitual para a V2 final'
      ]
    }
  },

  // --- Softwares Full-Stack & Ferramentas ---
  {
    title: 'API Status & Health Monitor',
    category: 'Software',
    stack: '.NET 8 • C# • SQLite • React • TypeScript',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    desc: 'Plataforma full-stack para monitoramento contínuo de disponibilidade HTTP, medição de latência em milissegundos e background worker com persistência relacional SQLite.',
    github: 'https://github.com/joaopmartins1608/api-health-monitor',
    featured: true
  },
  {
    title: 'Sprint & Incident Issue Tracker',
    category: 'Software',
    stack: '.NET 8 • C# • SQLite • React • TypeScript',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=600&q=80',
    desc: 'Quadro Kanban interativo para gerenciamento ágil de chamados técnicos e bugs, com triagem por severidade, avanço dinâmico de status e CRUD RESTful.',
    github: 'https://github.com/joaopmartins1608/issue-tracker-hub',
    featured: true
  },
  {
    title: 'Regex Pattern Sandbox & Explainer',
    category: 'Ferramentas',
    stack: 'React • TypeScript • Vite • Lucide',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    desc: 'Ambiente interativo client-side para validação de expressões regulares em tempo real, decomposição de grupos de captura, flags dinâmicas e biblioteca de padrões prontos.',
    github: 'https://github.com/joaopmartins1608/regex-sandbox-tool',
    featured: true
  },
  {
    title: 'HTTP Header & JWT Inspector',
    category: 'Ferramentas',
    stack: 'React • TypeScript • Vite • Web APIs',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    desc: 'Decodificador seguro de tokens JWT e analisador de cabeçalhos de segurança web (CSP, CORS, HSTS) com auditoria de expiração, 100% no navegador.',
    github: 'https://github.com/joaopmartins1608/jwt-header-inspector',
    featured: true
  },
  {
    title: 'Finance Dashboard',
    category: 'Software',
    stack: 'Python • Pandas • Matplotlib • Seaborn',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    desc: 'Pipeline completo de análise financeira em Python para processamento de transações, consolidação de métricas por categoria e geração automatizada de relatórios visuais.',
    github: 'https://github.com/joaopmartins1608/finance-dashboard'
  },
  {
    title: 'Customer Management System',
    category: 'Software',
    stack: 'Java • POO • Clean Architecture • NIO.2',
    image: 'https://midias-totvs.totvs.com/wp-content/uploads/2024/10/gestao-de-clientes.jpg.webp',
    desc: 'Sistema em camadas (Model, Repository, Service, CLI) para cadastro e gestão de clientes, com regras de validação estritas e persistência direta em disco.',
    github: 'https://github.com/joaopmartins1608/customer-management-system'
  },
  {
    title: 'Task Flow',
    category: 'Ferramentas',
    stack: 'HTML5 • CSS3 Moderno • Vanilla JavaScript',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80',
    desc: 'Gerenciador de tarefas diárias responsivo com filtros dinâmicos de status, contador de pendências em tempo real e sincronização persistente via Web Storage API.',
    github: 'https://github.com/joaopmartins1608/task-manager-web'
  },
  {
    title: 'Email & Report Automator',
    category: 'Ferramentas',
    stack: 'Python • Scripting • Template Engine • Logging',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=600&q=80',
    desc: 'Ferramenta CLI para automação de despachos de relatórios por e-mail com interpolação de métricas dinâmicas, logs rotacionados e suporte a modo de simulação (dry-run).',
    github: 'https://github.com/joaopmartins1608/email-report-automator'
  },
  {
    title: 'IPv4 Subnet & CIDR Calculator',
    category: 'Ferramentas',
    stack: 'React • TypeScript • Vite',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    desc: 'Utilitário de redes para cálculo instantâneo de blocos CIDR (/0 a /32), máscaras decimais, endereços de rede, broadcast e dimensionamento de hosts utilizáveis.',
    github: 'https://github.com/joaopmartins1608/ipv4-subnet-calculator'
  },
  {
    title: 'JSON ↔ CSV Data Converter & Validator',
    category: 'Ferramentas',
    stack: 'React • TypeScript • Vite',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=600&q=80',
    desc: 'Ferramenta bidirecional para transformação e validação de estruturas tabulares e hierárquicas, inferência dinâmica de tipos primitivos e cópia com um clique.',
    github: 'https://github.com/joaopmartins1608/json-csv-data-converter'
  },
  {
    title: 'Dynamic KPI & SVG Sparkline Widget',
    category: 'Ferramentas',
    stack: 'React • TypeScript • SVG Nativo • Vite',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    desc: 'Componente analítico para visualização de métricas de desempenho com mapeamento matemático de séries temporais em SVG puro e cálculo de tendências.',
    github: 'https://github.com/joaopmartins1608/kpi-sparkline-widget'
  },
  {
    title: 'Data Integrity & Document Validator API',
    category: 'Software',
    stack: 'C# • .NET 8 • Minimal APIs • Swagger',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    desc: 'Web API RESTful de alta performance para geração e verificação de hashes criptográficos (SHA-256, SHA-512, MD5) e validação matemática de CPF/CNPJ.',
    github: 'https://github.com/joaopmartins1608/data-integrity-api'
  },
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
  const [activeFilter, setActiveFilter] = useState<'Todos' | 'Visual' | 'Software' | 'Ferramentas'>('Todos');
  const [selectedVisualProject, setSelectedVisualProject] = useState<Project | null>(null);

  const filters: Array<'Todos' | 'Visual' | 'Software' | 'Ferramentas'> = [
    'Todos',
    'Visual',
    'Software',
    'Ferramentas'
  ];

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
          Aplicações funcionais, estudos de design system e direções de arte visual.
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
        {filteredProjects.map((p, idx) => {
          const isVisual = p.category === 'Visual';

          return (
            <div
              key={idx}
              className="glass-panel transition-smooth"
              onClick={() => {
                if (isVisual) {
                  setSelectedVisualProject(p);
                }
              }}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-glass)',
                cursor: isVisual ? 'pointer' : 'default',
                position: 'relative'
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
                  
                  {/* Badge de Categoria Dinâmica */}
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(7, 9, 19, 0.9)',
                    backdropFilter: 'blur(8px)',
                    color: isVisual 
                      ? '#A78BFA' 
                      : (p.category === 'Ferramentas' ? 'var(--accent-blue)' : 'var(--accent-purple)'),
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.35rem 0.8rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-glass)'
                  }}>
                    {isVisual && p.visualDetail
                      ? `Visual - ${p.visualDetail.tool}`
                      : p.category}
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
                    color: isVisual ? '#C4B5FD' : 'var(--accent-blue)',
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

              {/* Ação */}
              <div style={{ padding: '1.5rem', display: 'flex', gap: '0.8rem' }}>
                {isVisual ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVisualProject(p);
                    }}
                    className="transition-smooth"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#fff',
                      backgroundColor: 'rgba(167, 139, 250, 0.15)',
                      border: '1px solid rgba(167, 139, 250, 0.35)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      padding: '0.55rem 1rem',
                      borderRadius: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    <Eye size={16} color="#A78BFA" />
                    <span>Ver Detalhes & Galeria</span>
                  </button>
                ) : (
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
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Interativo para Projetos Visuais (Figma e Photoshop) */}
      {selectedVisualProject && selectedVisualProject.visualDetail && (
        <div
          onClick={() => setSelectedVisualProject(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(5, 6, 10, 0.88)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel"
            style={{
              backgroundColor: '#0F1015',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '24px',
              maxWidth: '960px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              padding: '2rem',
              position: 'relative'
            }}
          >
            {/* Botão Fechar */}
            <button
              onClick={() => setSelectedVisualProject(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>

            {/* Cabeçalho do Modal */}
            <div style={{ marginBottom: '1.5rem', paddingRight: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  backgroundColor: 'rgba(167, 139, 250, 0.2)',
                  color: '#A78BFA',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(167, 139, 250, 0.3)'
                }}>
                  Visual • {selectedVisualProject.visualDetail.tool}
                </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                  {selectedVisualProject.stack}
                </span>
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
                {selectedVisualProject.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
                {selectedVisualProject.desc}
              </p>
            </div>

            {/* Galeria de Prints do Projeto com Badges V1 / V2 e Legendas */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: selectedVisualProject.visualDetail.gallery.length > 1 ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {selectedVisualProject.visualDetail.gallery.map((item, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#07080B',
                    borderRadius: '16px',
                    padding: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '260px',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    padding: '0.5rem'
                  }}>
                    <img
                      src={item.url}
                      alt={item.versionBadge || `${selectedVisualProject.title} preview`}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '380px',
                        borderRadius: '8px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  {/* Informações da Versão e Legenda */}
                  <div style={{ marginTop: '1rem' }}>
                    {item.versionBadge && (
                      <span style={{
                        display: 'inline-block',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        backgroundColor: item.versionBadge.startsWith('V1') ? 'rgba(255, 255, 255, 0.08)' : 'rgba(56, 189, 248, 0.2)',
                        color: item.versionBadge.startsWith('V1') ? '#E4E4E7' : '#38BDF8',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        border: item.versionBadge.startsWith('V1') ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(56, 189, 248, 0.3)',
                        marginBottom: '0.5rem'
                      }}>
                        {item.versionBadge}
                      </span>
                    )}
                    {item.caption && (
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                        {item.caption}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Destaques Técnicos e Competências */}
            <div style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '1.5rem'
            }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#fff', marginBottom: '0.75rem' }}>
                Decisões de Design & Engenharia
              </h4>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {selectedVisualProject.visualDetail.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
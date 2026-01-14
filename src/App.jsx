import { useState } from 'react';
import './App.css';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('inicio');

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => navegarPara('inicio')}>
          JP<span className="dot">.</span>
        </div>
        <div className="nav-links">
          <button 
            className={paginaAtual === 'inicio' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => navegarPara('inicio')}
          >
            Início
          </button>
          <button 
            className={paginaAtual === 'projetos' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => navegarPara('projetos')}
          >
            Portfólio
          </button>
          <button 
            className={paginaAtual === 'certificados' ? 'nav-btn active' : 'nav-btn'} 
            onClick={() => navegarPara('certificados')}
          >
            Formação
          </button>
        </div>
      </nav>

      <main className="main-content fade-in">
        
        {/* === HOME === */}
        {paginaAtual === 'inicio' && (
          <>
            <section className="hero">
              <div className="hero-content">
                <span className="greeting">Portfólio Profissional</span>
                
                {/* NOME COMPLETO AGORA */}
                <h1 className="name">
                  João Pedro <span className="gradient-text">Padilha Martins</span>
                </h1>
                
                <h2 className="role">
                  Dev Full Stack & Assistente Administrativo <br/>
                  <span className="sub-role">🎓 3º Ano / 5º Período Noturno - Sistemas de Informação</span>
                </h2>
                
                <div className="contact-pills">
                  <span className="pill">📞 (41) 99735-7401</span>
                  <a href="mailto:joaopmartins1608@gmail.com" className="pill">✉️ joaopmartins1608@gmail.com</a>
                  <span className="pill">📍 Curitiba, PR</span>
                </div>

                <p className="bio">
                  Sou um desenvolvedor em formação apaixonado por resolver problemas. 
                  Meu diferencial é unir a capacidade técnica de programação (Full Stack) 
                  com a organização administrativa. Tenho facilidade em aprender novas tecnologias 
                  e busco estágio para aplicar meus conhecimentos em <strong>Java, React e Gestão de Dados</strong>.
                </p>
                
                <div className="hero-actions">
                  <button onClick={() => navegarPara('projetos')} className="cta-button primary">Ver Projetos</button>
                  <a href="https://github.com/joaopmartins1608" target="_blank" rel="noreferrer" className="cta-button outline">GitHub</a>
                  <a href="https://www.linkedin.com/in/joão-pedro-padilhamartins/" target="_blank" rel="noreferrer" className="cta-button outline">LinkedIn</a>
                </div>
              </div>
            </section>

            <section className="section-preview">
              <h3 className="section-title-center">Minhas Principais Tecnologias</h3>
              <div className="skills-preview-grid">
                <div className="skill-box">
                  <div className="icon-big">⚛️</div>
                  <strong>React.js</strong>
                  <span className="skill-desc">Web Interativa</span>
                </div>
                <div className="skill-box">
                  <div className="icon-big">☕</div>
                  <strong>Java</strong>
                  <span className="skill-desc">Backend / POO</span>
                </div>
                <div className="skill-box">
                  <div className="icon-big">🐍</div>
                  <strong>Python</strong>
                  <span className="skill-desc">Dados / Automação</span>
                </div>
                <div className="skill-box">
                  <div className="icon-big">💾</div>
                  <strong>SQL</strong>
                  <span className="skill-desc">Banco de Dados</span>
                </div>
              </div>
            </section>
          </>
        )}

        {/* === PORTFÓLIO === */}
        {paginaAtual === 'projetos' && (
          <div className="page-section slide-up">
            <h2 className="page-title">Portfólio & Documentação</h2>
            <p className="page-desc">Projetos práticos de desenvolvimento e exemplos de organização administrativa.</p>

            <h3 className="category-title">💻 Desenvolvimento</h3>
            <div className="projects-grid">
              <div className="project-card">
                <div className="card-header">
                  <span className="tag react">React + API</span>
                  <h4>Buscador de CEP</h4>
                </div>
                <p>Aplicação web para consulta automática de endereços via API ViaCEP. Interface responsiva.</p>
                <a href="https://github.com/joaopmartins1608/portfolio-react" target="_blank" rel="noreferrer" className="btn-link">Ver Código ➜</a>
              </div>
              <div className="project-card">
                <div className="card-header">
                  <span className="tag java">Java Backend</span>
                  <h4>Sistema Bancário</h4>
                </div>
                <p>Simulador de banco com lógica de POO, saques, depósitos e validações de segurança.</p>
                <a href="https://github.com/joaopmartins1608/portfolio-java" target="_blank" rel="noreferrer" className="btn-link">Ver Código ➜</a>
              </div>
            </div>

            <h3 className="category-title">💾 Dados & SQL</h3>
            <div className="projects-grid">
              <div className="project-card">
                <div className="card-header">
                  <span className="tag sql">SQL</span>
                  <h4>Gestão de Tickets</h4>
                </div>
                <p>Estrutura de banco de dados para sistema de suporte e SLA. Queries otimizadas.</p>
                <a href="https://github.com/joaopmartins1608/repositorio-sql" target="_blank" rel="noreferrer" className="btn-link">Ver Queries ➜</a>
              </div>
            </div>

            <h3 className="category-title">📋 Gestão & Admin</h3>
            <div className="projects-grid">
              <div className="project-card admin-mode">
                <div className="card-header">
                  <span className="tag admin">Kanban</span>
                  <h4>Gestão de Tarefas (Trello)</h4>
                </div>
                <p>Organização do fluxo de desenvolvimento (To Do, Doing, Done) e rastreamento de bugs.</p>
                
                {/* IMAGEM DO TRELLO */}
                <img 
                  src="https://i.imgur.com/wXKYDPy.png" 
                  alt="Quadro Trello do Projeto" 
                  className="project-print" 
                />
              </div>
            </div>
          </div>
        )}

        {/* === FORMAÇÃO (Plano B: Apenas Faculdade) === */}
        {paginaAtual === 'certificados' && (
          <div className="page-section slide-up">
            <h2 className="page-title">Formação Acadêmica</h2>
            <p className="page-desc">Educação formal em andamento.</p>

            <div className="certificados-grid">
              
              <div className="cert-card">
                <div className="cert-img-container">
                  <img src="https://placehold.co/600x400/1e293b/FFF?text=Sist.+Informacao" alt="Faculdade" />
                </div>
                <div className="cert-info">
                  <h4>Sistemas de Informação</h4>
                  <p>Bacharelado • 5º Período (Cursando)</p>
                  <small style={{color: '#38bdf8'}}>Previsão de Conclusão: 2026</small>
                </div>
              </div>

              {/* Removidos Java e Excel conforme solicitado */}

            </div>
          </div>
        )}

      </main>

      <footer className="footer">
        <p>© 2024 João Pedro Padilha Martins. Feito com React.</p>
      </footer>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-wrapper fade-in">
      {/* --- HERO SECTION --- */}
      <section className="hero">
        <div className="hero-content">
          <span className="greeting">Portfólio Profissional</span>
          <h1 className="name">
            João Pedro <span className="gradient-text">Martins</span>
          </h1>
          <h2 className="role">Dev Full Stack & Assistente Administrativo</h2>

          <div className="contact-pills">
            <a
              href="https://github.com/joaopmartins1608"
              target="_blank"
              className="pill"
            >
              🐱 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/joão-pedro-padilhamartins/"
              target="_blank"
              className="pill"
            >
              💼 LinkedIn
            </a>
            <span className="pill">📍 Curitiba, PR</span>
            <span className="pill">🇺🇸 Inglês Intermediário</span>
          </div>

          <p className="bio">
            Profissional polivalente cursando{' '}
            <strong>Sistemas de Informação</strong>. Uno a lógica da programação
            (Java/Python) com a organização administrativa (Excel/Trello). Busco
            oportunidade como <strong>Estagiário em TI</strong>,{' '}
            <strong>Suporte</strong> ou{' '}
            <strong>Assistente Administrativo</strong>.
          </p>
        </div>
      </section>

      {/* --- SKILLS DUPLAS --- */}
      <section className="skills-section slide-up">
        <div className="skills-split">
          {/* Lado Esquerdo: Tech */}
          <div className="skills-group">
            <h3 className="group-title">💻 Desenvolvimento & TI</h3>
            <div className="skills-grid">
              {[
                { name: 'Java & POO', icon: '☕' },
                { name: 'React.js', icon: '⚛️' },
                { name: 'Python', icon: '🐍' },
                { name: 'SQL & Dados', icon: '💾' },
                { name: 'Nuvem/Cloud', icon: '☁️' },
              ].map((skill, index) => (
                <div key={index} className="skill-card tech-card">
                  <div className="icon-box">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Admin */}
          <div className="skills-group">
            <h3 className="group-title">📊 Gestão & Administrativo</h3>
            <div className="skills-grid">
              {[
                { name: 'Pacote Office', icon: '📑' },
                { name: 'Excel Avançado', icon: '📗' },
                { name: 'Trello / Kanban', icon: '📋' },
                { name: 'Google Workspace', icon: '🌐' },
                { name: 'Gestão Projetos', icon: '✅' },
              ].map((skill, index) => (
                <div key={index} className="skill-card admin-card">
                  <div className="icon-box">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJETOS --- */}
      <section className="projects-section slide-up">
        <h3 className="section-title">Portfólio Prático</h3>
        <div className="projects-grid">
          <div className="project-card">
            <div className="card-header">
              <span className="tag react">React + API</span>
              <h4>Buscador de CEP</h4>
            </div>
            <p>
              Sistema web para consulta automática de endereços via API. Foco em
              agilidade e experiência do usuário.
            </p>
            <a
              href="https://github.com/joaopmartins1608/portfolio-react"
              target="_blank"
              className="btn-link"
            >
              Ver Código ➜
            </a>
          </div>

          <div className="project-card">
            <div className="card-header">
              <span className="tag java">Java Backend</span>
              <h4>Sistema Bancário</h4>
            </div>
            <p>
              Simulador financeiro com lógica de validação rigorosa. Demonstra
              segurança e organização de dados.
            </p>
            <a
              href="https://github.com/joaopmartins1608/portfolio-java"
              target="_blank"
              className="btn-link"
            >
              Ver Código ➜
            </a>
          </div>

          <div className="project-card">
            <div className="card-header">
              <span className="tag sql">Gestão & SQL</span>
              <h4>Banco de Dados Support</h4>
            </div>
            <p>
              Sistema de controle de chamados (Tickets). Aplicação prática de
              gestão de SLA e prioridades.
            </p>
            <a
              href="https://github.com/joaopmartins1608/repositorio-sql"
              target="_blank"
              className="btn-link"
            >
              Ver Código ➜
            </a>
          </div>
        </div>
      </section>

      {/* --- FORMAÇÃO & IDIOMAS --- */}
      <section className="education-section slide-up">
        <div className="edu-grid">
          <div className="edu-card">
            <h3>🎓 Formação Acadêmica</h3>
            <div className="timeline-item">
              <strong>Sistemas de Informação</strong>
              <p>Bacharelado (Cursando)</p>
              <span>Foco em Desenvolvimento e Gestão de TI.</span>
            </div>
          </div>

          <div className="edu-card">
            <h3>🌍 Idiomas</h3>
            <div className="lang-item">
              <div className="lang-icon">🇺🇸</div>
              <div>
                <strong>Inglês Intermediário</strong>
                <p>Leitura técnica, documentação e escrita.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <p>Disponível para início imediato (Híbrido, Remoto ou Presencial).</p>
        <a href="mailto:joaopmartins1608@gmail.com" className="cta-button">
          ✉️ Contatar Agora
        </a>
      </footer>
    </div>
  );
}

export default App;

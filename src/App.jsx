import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('inicio');
  const [modalImagem, setModalImagem] = useState(null);
  const [zoomAtivo, setZoomAtivo] = useState(false);
  const [origem, setOrigem] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  // --- LÓGICA DO MODAL ---
  const abrirModal = (imgSrc) => {
    setModalImagem(imgSrc);
    setZoomAtivo(false);
    setOrigem({ x: 50, y: 50 });
    // PushState apenas para o modal, sem mudar a URL da página
    window.history.pushState({ modalAtivo: true }, "");
  };

  const fecharModal = (e) => {
    if (e) e.stopPropagation();
    if (modalImagem) {
      setModalImagem(null);
      setZoomAtivo(false);
      // Se voltarmos manualmente, verificamos se o topo do histórico é o modal
      if (window.history.state?.modalAtivo) {
        window.history.back();
      }
    }
  };

  const alternarZoom = (e) => {
    e.stopPropagation();
    setZoomAtivo(!zoomAtivo);
  };

  const lidarMovimento = (e) => {
    if (!zoomAtivo || !containerRef.current) return;
    const { clientX, clientY } = e.type.includes('touch') ? e.touches[0] : e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setOrigem({ x, y });
  };

  useEffect(() => {
    const handlePopState = (event) => {
      // Fecha o modal se o usuário usar o botão físico de voltar
      if (modalImagem) {
        setModalImagem(null);
        setZoomAtivo(false);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [modalImagem]);

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      
      {/* MODAL DE ZOOM */}
      {modalImagem && (
        <div className="modal-overlay" onClick={() => fecharModal()}>
          <button className="modal-close" onClick={() => fecharModal()}>&times;</button>
          <div 
            ref={containerRef}
            className={`modal-viewport ${zoomAtivo ? 'is-zoomed' : ''}`}
            onClick={(e) => zoomAtivo ? alternarZoom(e) : fecharModal(e)}
            onMouseMove={lidarMovimento}
            onTouchMove={lidarMovimento}
          >
            <img 
              src={modalImagem} 
              className="img-modal-full"
              onClick={(e) => { e.stopPropagation(); alternarZoom(e); }}
              style={{
                transformOrigin: `${origem.x}% ${origem.y}%`,
                transform: zoomAtivo ? 'scale(2.5)' : 'scale(1)'
              }}
              alt="Visualização"
            />
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => navegarPara('inicio')}>JP<span className="dot">.</span></div>
        <div className="nav-links">
          <button className={paginaAtual === 'inicio' ? 'nav-btn active' : 'nav-btn'} onClick={() => navegarPara('inicio')}>Início</button>
          <button className={paginaAtual === 'projetos' ? 'nav-btn active' : 'nav-btn'} onClick={() => navegarPara('projetos')}>Portfólio</button>
          <button className={paginaAtual === 'formacao' ? 'nav-btn active' : 'nav-btn'} onClick={() => navegarPara('formacao')}>Formação</button>
        </div>
      </nav>

      <main className="main-content fade-in">
        
        {/* === PÁGINA 1: INÍCIO === */}
        {paginaAtual === 'inicio' && (
          <section className="page-section">
            <header className="hero">
              <span className="hero-badge">Portfólio Profissional</span>
              <h1 className="name">João Pedro <span className="text-gradient">Padilha Martins</span></h1>
              <h2 className="role">Dev Full Stack & Assistente Administrativo</h2>
              <h3 className="college">🎓 3º Ano / 5º Período Noturno - Sistemas de Informação</h3>
              <div className="contact-info">
                <span>📞 (41) 99735-7401</span>
                <span>✉️ joaopmartins1608@gmail.com</span>
                <span>📍 Curitiba, PR, Brasil</span>
              </div>
              <p className="bio">
                Sou um desenvolvedor em formação apaixonado por resolver problemas. Meu diferencial é unir a capacidade técnica de programação (Full Stack) com a organização administrativa. Tenho facilidade em aprender novas tecnologias e busco estágio para aplicar meus conhecimentos em Java, React e Gestão de Dados.
              </p>
              <div className="action-btns">
                <button onClick={() => navegarPara('projetos')} className="btn-main">Ver Projetos</button>
                <a href="https://github.com/joaopmartins1608" target="_blank" rel="noreferrer" className="btn-sec">GitHub</a>
                <a href="https://linkedin.com/in/joão-pedro-padilhamartins/" target="_blank" rel="noreferrer" className="btn-sec">LinkedIn</a>
              </div>
            </header>

            <div className="tech-section">
              <h3 className="section-title">Minhas Principais Tecnologias</h3>
              <div className="tech-grid">
                <div className="tech-card"><span>⚛️</span> <strong>React.js</strong> <small>Web Interativa</small></div>
                <div className="tech-card"><span>☕</span> <strong>Java</strong> <small>Backend / POO</small></div>
                <div className="tech-card"><span>🐍</span> <strong>Python</strong> <small>Dados / Automação</small></div>
                <div className="tech-card"><span>💾</span> <strong>SQL</strong> <small>Banco de Dados</small></div>
              </div>
            </div>
          </section>
        )}

        {/* === PÁGINA 2: PORTFÓLIO === */}
        {paginaAtual === 'projetos' && (
          <section className="page-section">
            <h2 className="page-title">Portfólio & Documentação</h2>
            <h3 className="cat-title">💻 Desenvolvimento</h3>
            <div className="bento-grid">
              <div className="card">
                <span className="tag blue">React + API</span>
                <h4>Buscador de CEP</h4>
                <p>Aplicação web para consulta automática de endereços via API ViaCEP. Interface responsiva.</p>
                <a href="https://github.com/joaopmartins1608" target="_blank" rel="noreferrer" className="link">Ver Código ➜</a>
              </div>
              <div className="card">
                <span className="tag orange">Java Backend</span>
                <h4>Sistema Bancário</h4>
                <p>Simulador de banco com lógica de POO, saques, depósitos e validações de segurança.</p>
                <a href="https://github.com/joaopmartins1608" target="_blank" rel="noreferrer" className="link">Ver Código ➜</a>
              </div>
              <div className="card">
                <span className="tag purple">React + IA</span>
                <h4>SmartFin App</h4>
                <p>Dashboard de finanças com IA desenvolvido na DIO.</p>
                <a href="https://github.com/joaopmartins1608" target="_blank" rel="noreferrer" className="link">Ver Código ➜</a>
              </div>
            </div>

            <h3 className="cat-title">📋 Gestão & Admin</h3>
            <div className="bento-grid single">
              <div className="card">
                <span className="tag green">Kanban</span>
                <div className="card-img-container" onClick={() => abrirModal('/images/thumb-trello.jpeg')}>
                    <img src="/images/thumb-trello.jpeg" alt="Trello" className="card-img clickable" />
                </div>
                <h4>Gestão de Tarefas (Trello)</h4>
                <p>Organização do fluxo de desenvolvimento (To Do, Doing, Done) e rastreamento de bugs.</p>
              </div>
            </div>
          </section>
        )}

        {/* === PÁGINA 3: FORMAÇÃO === */}
        {paginaAtual === 'formacao' && (
          <section className="page-section">
            <h2 className="page-title">Formação Acadêmica</h2>
            <div className="cert-stack">
              <div className="cert-card-wide">
                <img src="/images/thumb-ia.jpeg" alt="IA" className="cert-thumb clickable" onClick={() => abrirModal('/images/thumb-ia.jpeg')} />
                <div className="cert-info">
                  <span className="issuer">DIO + CAIXA</span>
                  <h4>Inteligência Artificial na Prática</h4>
                  <p>Engenharia de Prompt e LLMs (28h)</p>
                  <a href="/docs/certificado-bootcamp.pdf" target="_blank" rel="noreferrer" className="btn-pdf">Visualizar PDF Oficial ➜</a>
                </div>
              </div>
              <div className="cert-card-wide">
                <img src="/images/thumb-excel.jpeg" alt="Excel" className="cert-thumb clickable" onClick={() => abrirModal('/images/thumb-excel.jpeg')} />
                <div className="cert-info">
                  <span className="issuer">Fundação Bradesco</span>
                  <h4>Excel 2016 Avançado</h4>
                  <p>Dashboards e Macros (30h)</p>
                  <a href="/docs/certificado-excel.pdf" target="_blank" rel="noreferrer" className="btn-pdf">Visualizar PDF Oficial ➜</a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>© 2026 João Pedro Padilha Martins. Feito com React.</p>
      </footer>
    </div>
  );
}

export default App;

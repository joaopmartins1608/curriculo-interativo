# 🚀 Portfólio Profissional - João Pedro Padilha Martins

Este é o repositório do meu portfólio pessoal e profissional, desenvolvido com **React.js**. O objetivo deste projeto é centralizar a minha trajetória acadêmica em Sistemas de Informação, as minhas competências como Desenvolvedor Full Stack e a minha experiência administrativa.

---

## 🛠️ Tecnologias Utilizadas

- **Front-end:** React.js (Hooks: `useState`, `useEffect`, `useRef`)
- **Estilização:** CSS3 Moderno (Bento Grid, Variáveis CSS, Animações)
- **Navegação:** State Management para Single Page Application (SPA)
- **Ícones/Assets:** Emojis e Gradientes Vetoriais

---

## 🌟 Diferenciais Técnicos (Engenharia de UX)

Neste projeto, foquei em resolver desafios comuns de usabilidade sem depender de bibliotecas externas pesadas:

### 🔍 1. Visualizador de Imagens Nativo com Pan & Zoom
Desenvolvi um motor de zoom personalizado que permite ao utilizador:
- **Zoom Dinâmico:** Utiliza coordenadas `onMouseMove` para definir o `transform-origin`, permitindo que o utilizador "explore" os detalhes dos certificados e prints de projetos.
- **Responsividade Mobile:** Suporte para `onTouchMove`, garantindo a mesma experiência em dispositivos táteis.

### 📜 2. Gestão de Histórico e Modais
Para evitar que o utilizador saia do site ao tentar fechar um modal usando o botão "Voltar" do navegador/telemóvel, implementei uma integração com a **History API**:
- O estado do modal é injetado no histórico do navegador via `pushState`.
- Um listener de `popstate` garante que o modal feche suavemente sem recarregar a página ou voltar para o topo do site.

### 🎨 3. Design Bento Grid
Utilização de uma estrutura de grelha moderna para organizar projetos e competências de forma hierárquica e visualmente limpa, adaptando-se automaticamente a qualquer tamanho de ecrã.

---

## 📂 Estrutura do Projeto

```text
├── public/
│   ├── images/       # Assets visuais (certificados, thumbnails)
│   └── docs/         # Documentos PDF (certificações oficiais)
├── src/
│   ├── App.jsx       # Componente principal e lógica de rotas/zoom
│   ├── App.css       # Estilização global e variáveis de design
│   └── main.jsx      # Ponto de entrada do React
└── package.json      # Dependências e scripts
🎯 Objetivos de Carreira
Atualmente no 5º período de Sistemas de Informação, procuro oportunidades de estágio onde possa aplicar:

Desenvolvimento de APIs com Java/Spring Boot.

Criação de interfaces modernas com React.

Automação de processos e análise de dados com Python e SQL.

📬 Contacto
LinkedIn: João Pedro Padilha Martins

Email: joaopmartins1608@gmail.com

WhatsApp: (41) 99735-7401

Desenvolvido por João Pedro Martins | 2026


---

### Porquê este README funciona?
1. **Destaque do "Como":** Tu não dizes apenas que fizeste um zoom; tu explicas que usaste `onMouseMove` e `transform-origin`. Isso prova conhecimento técnico de JavaScript e CSS.
2. **Palavras-Chave:** Termos como `History API`, `SPA`, `popstate` e `hooks` são o que os filtros de recrutamento procuram.
3. **Organização:** Mostra que te preocupas com a manutenção do código.

**O que achas desta estrutura?** Se estiver ao teu gosto, basta subires para o GitHub. Depois disso, se quiseres, podemos fazer aquela **simulação rápida de entrevista** para treinares a explicação destes pontos!

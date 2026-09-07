import React from 'react';
import { Terminal, Sparkles, Heart, Drama } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '3.5rem 2rem' }}>
      <h2 style={{ fontSize: '2.4rem', marginBottom: '0.5rem' }}>Minha História</h2>
      <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '2rem' }}>
        Sistemas de Informação • Desenvolvimento • Criação Multidisciplinar
      </p>

      <div
        className="glass-panel"
        style={{
          borderRadius: '16px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.8rem'
        }}
      >
        {/* A Jornada na Tecnologia */}
        <div>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', marginBottom: '0.6rem' }}>
            <Terminal color="var(--accent)" size={20} /> A Jornada na Tecnologia
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.98rem' }}>
            Graduando em Sistemas de Informação pelo Centro Universitário Santa Cruz, com início da trajetória acadêmica na Universidade Positivo. Desde cedo, desenvolvi paixão por resolver problemas reais construindo softwares bem estruturados, atualmente utilizando o ecossistema .NET (C#), React, TypeScript e bancos de dados, aliando essas tecnologias a agentes de inteligência artificial (Gemini, Copilot, GitHub Copilot, Claude Code e ChatGPT).
          </p>
        </div>

        {/* Design e Criatividade */}
        <div>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', marginBottom: '0.6rem' }}>
            <Sparkles color="var(--accent)" size={20} /> Design e Criatividade
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.98rem' }}>
            Acredito que o código só atinge seu potencial máximo quando aliado a uma experiência pensada para pessoas. Por isso, dedico tempo aos fundamentos de design de interface no Figma, à criação de identidades visuais e à edição de fotografias no Adobe Photoshop, além de utilizar o Midjourney e o Nano Banana como aliados na geração de imagens.
          </p>
        </div>

        {/* Fora da Tela */}
        <div>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', marginBottom: '0.6rem' }}>
            <Heart color="var(--accent)" size={20} /> Fora da Tela
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.98rem' }}>
            Nos momentos de lazer, exploro fotografia analógica e digital, projetos de customização mecânica automotiva, artes gráficas para capas de músicas retrô e teatro — referências que alimentam minha curiosidade e minha capacidade de adaptação em equipe.
          </p>
        </div>

        {/* Área Artística */}
        <div>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', marginBottom: '0.6rem' }}>
            <Drama color="var(--accent)" size={20} /> Área Artística
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.98rem' }}>
            Sou modelo desde 2015, formado pela CasaBlanca, e iniciei no teatro pelo Lala Schneider. Atuei em diversas campanhas publicitárias e atualmente sou agenciado pela DM Atores e Modelos.
          </p>
        </div>
      </div>
    </main>
  );
};
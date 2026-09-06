import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="glass-panel" style={{
      marginTop: 'auto',
      padding: '1.5rem',
      textAlign: 'center',
      borderTop: '1px solid var(--border-glass)',
      color: 'var(--text-secondary)',
      fontSize: '0.85rem'
    }}>
      <p>© 2026 João Pedro Padilha Martins — Currículo Interativo & Portfólio.</p>
    </footer>
  );
};
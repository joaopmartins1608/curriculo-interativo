import React from 'react';
import { Award } from 'lucide-react';

const certificates = [
  {
    title: 'Graduação em Sistemas de Informação',
    issuer: 'Centro Universitário Santa Cruz',
    date: 'Cursando • Conclusão prevista 2027/2028',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Desenvolvimento Web Full-Stack & APIs',
    issuer: 'Formação Técnica Especializada',
    date: '2026',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Modelagem de Dados e Power BI',
    issuer: 'Certificação em Business Intelligence',
    date: '2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  }
];

export const Certificates: React.FC = () => {
  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '3.5rem 2rem' }}>
      <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>Certificados & Formação</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>Comprovações de capacitação técnica contínua.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem' }}>
        {certificates.map((cert, idx) => (
          <div key={idx} className="glass-panel transition-smooth" style={{ borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ height: '160px', overflow: 'hidden' }}>
              <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>
                <Award size={18} />
                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>CERTIFICAÇÃO VERIFICADA</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>{cert.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{cert.issuer}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.4rem' }}>{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
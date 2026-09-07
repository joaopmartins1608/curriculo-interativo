import React, { useState, useEffect } from 'react';
import { Award, Eye, X } from 'lucide-react';

interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  code?: string;
  coverImage: string;
  certificateFile?: string;
}

const certificates: CertificateItem[] = [
  {
    title: 'Graduação em Sistemas de Informação',
    issuer: 'Centro Universitário Santa Cruz',
    date: 'Cursando • Conclusão prevista 2027/2028',
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Bootcamp CAIXA - Inteligência Artificial na Prática',
    issuer: 'Digital Innovation One (DIO) • Microsoft • CAIXA',
    date: 'Janeiro de 2026 • 28h',
    code: 'TP7FED8P',
    coverImage: 'https://itshow.com.br/wp-content/uploads/2024/10/portalitshow_httpss.mj-1-1-scaled.webp',
    certificateFile: '/certificates/bootcamp-caixa.jpg'
  },
  {
    title: 'Microsoft Excel 2016 - Avançado',
    issuer: 'Fundação Bradesco • Escola Virtual',
    date: 'Janeiro de 2026 • 30h',
    code: '2911CC28-75D2-4639-AE1D-6CB418478E6E',
    // Imagem temática: Dashboard, planilhas e computação analítica
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    certificateFile: '/certificates/excel-bradesco.jpg'
  },
  {
    title: 'Formação em Língua Inglesa (Move Your Life)',
    issuer: 'Yázigi • Nível Pré-Intermediário (A2+/B1-)',
    date: 'Dezembro de 2025 • 140h',
    // Imagem temática: Big Ben, Londres / Língua Inglesa Global
    coverImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
    certificateFile: '/certificates/ingles-yazigi.png'
  }
];

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  // Fecha o modal ao pressionar a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '3.5rem 2rem' }}>
      <h2 style={{ fontSize: '2.2rem', marginBottom: '0.4rem', color: '#fff' }}>
        Certificados & Formação
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
        Comprovações de capacitação técnica contínua e certificações oficiais.
      </p>

      {/* Grid de Certificados */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem' }}>
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="glass-panel transition-smooth"
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid var(--border-glass)'
            }}
          >
            <div>
              {/* Capa Ilustrativa do Card */}
              <div style={{ height: '170px', overflow: 'hidden' }}>
                <img
                  src={cert.coverImage}
                  alt={cert.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <div style={{ padding: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>
                  <Award size={18} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>CERTIFICAÇÃO OFICIAL</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: '#fff' }}>{cert.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{cert.issuer}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.4rem' }}>{cert.date}</p>
                {cert.code && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', opacity: 0.8, marginTop: '0.3rem', fontFamily: 'monospace' }}>
                    Cód: {cert.code}
                  </p>
                )}
              </div>
            </div>

            {/* Botão de Abrir Certificado */}
            {cert.certificateFile && (
              <div style={{ padding: '0 1.2rem 1.2rem' }}>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="transition-smooth"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    padding: '0.55rem 0.8rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-glass)',
                    color: '#fff',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <Eye size={15} />
                  <span>Visualizar Certificado</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Caixinha Modal (Lightbox) */}
      {selectedCert && selectedCert.certificateFile && (
        <div
          onClick={() => setSelectedCert(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1.5rem'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel"
            style={{
              position: 'relative',
              maxWidth: '850px',
              width: '100%',
              maxHeight: '90vh',
              borderRadius: '16px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid var(--border-glass)',
              backgroundColor: '#0c101c'
            }}
          >
            {/* Cabeçalho do Modal */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>{selectedCert.title}</h4>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{selectedCert.issuer}</span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#fff'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Documento Aberto */}
            <div style={{ width: '100%', overflow: 'auto', display: 'flex', justifyContent: 'center' }}>
              <img
                src={selectedCert.certificateFile}
                alt={`Certificado de ${selectedCert.title}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
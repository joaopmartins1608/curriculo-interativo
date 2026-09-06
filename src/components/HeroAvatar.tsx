import React, { useState } from 'react';
import { 
  Code2, Database, Terminal, Cpu, Layers, Braces, 
  Binary, Wrench, Globe, Gamepad2, Disc, Headphones, 
  Palette, Compass, Sparkles 
} from 'lucide-react';

const TECH_ICONS = [
  Code2, Database, Terminal, Cpu, Layers, 
  Braces, Binary, Wrench, Globe, Sparkles
];

const HOBBY_ICONS = [
  { icon: Disc, label: 'Vinil & Som' },
  { icon: Headphones, label: 'Música' },
  { icon: Gamepad2, label: 'Jogos' },
  { icon: Wrench, label: 'Mecânica' },
  { icon: Palette, label: 'Design Gráfico' },
  { icon: Compass, label: 'Exploração' }
];

export const HeroAvatar: React.FC = () => {
  const [hobbyIndex, setHobbyIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const nextHobby = () => {
    setIsSpinning(true);
    setHobbyIndex((prev) => (prev + 1) % HOBBY_ICONS.length);
    setTimeout(() => setIsSpinning(false), 600);
  };

  const CurrentHobbyIcon = HOBBY_ICONS[hobbyIndex].icon;

  // 10 bolinhas distribuídas entre órbitas e ângulos
  const particles = Array.from({ length: 10 }).map((_, i) => {
    const OrbitIcon = TECH_ICONS[i % TECH_ICONS.length];
    const orbitType = (i % 3) + 1; // 1, 2 ou 3
    const duration = 12 + (i % 4) * 3; // velocidades variadas
    const delay = -(i * 1.5);
    const angle = (i * 36) * (Math.PI / 180);
    const radius = 135; // distância do centro
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    return { id: i, Icon: OrbitIcon, orbitType, duration, delay, x, y };
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.8rem', position: 'relative' }}>
      {/* Container do Modelo Atômico */}
      <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Órbitas Elípticas de Rutherford */}
        <div style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          border: '1px dashed rgba(56, 189, 248, 0.25)',
          animation: 'atomicOrbit1 18s linear infinite'
        }} />

        <div style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          border: '1px dashed rgba(168, 85, 247, 0.25)',
          animation: 'atomicOrbit2 22s linear infinite'
        }} />

        <div style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          border: '1px dashed rgba(56, 189, 248, 0.25)',
          animation: 'atomicOrbit3 20s linear infinite'
        }} />

        {/* 10 Bolinhas com Ícones de Linguagens */}
        {particles.map((p) => {
          const IconComp = p.Icon;
          return (
            <div
              key={p.id}
              style={{
                position: 'absolute',
                transform: `translate(${p.x}px, ${p.y}px)`,
                zIndex: 4
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(13, 17, 36, 0.85)',
                  border: '1px solid rgba(168, 85, 247, 0.4)',
                  boxShadow: '0 0 12px rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: p.id % 2 === 0 ? 'var(--accent-blue)' : 'var(--accent-purple)',
                  backdropFilter: 'blur(6px)',
                  animation: `counterRotate ${p.duration}s linear infinite`
                }}
              >
                <IconComp size={16} />
              </div>
            </div>
          );
        })}

        {/* Núcleo Atômico (Sua Foto) */}
        <div style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          padding: '4px',
          background: 'var(--accent-gradient)',
          boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
          position: 'relative',
          zIndex: 3
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: '#0d1124'
          }}>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
              alt="João Pedro"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Botão de Hobbies (Sem Legenda, Somente Ícone com Giro) */}
      <button
        onClick={nextHobby}
        title="Alternar Hobbies"
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'rgba(17, 24, 48, 0.8)',
          border: '1px solid var(--border-glass)',
          boxShadow: '0 4px 15px rgba(56, 189, 248, 0.15)',
          color: 'var(--accent-blue)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          outline: 'none'
        }}
      >
        <div className={`hobby-btn-icon ${isSpinning ? 'spinning' : ''}`}>
          <CurrentHobbyIcon size={22} />
        </div>
      </button>
    </div>
  );
};
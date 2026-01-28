import React, { useState } from 'react';

/**
 * Componente de Demonstração do Novo Design
 * Mostra como usar o BetController e as melhorias
 */
export function BetControllerDemo() {
  const [aposta, setAposta] = useState(5);
  const [credito] = useState(100);

  const apostaMenos = () => {
    if (aposta > 1) setAposta(aposta - 1);
  };

  const apostaMais = () => {
    const maxAposta = Math.min(credito, 10);
    if (aposta < maxAposta) setAposta(aposta + 1);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>📊 Demonstração do Novo Design de Aposta</h2>

      <section style={{ marginTop: '30px' }}>
        <h3>Antes (Design Antigo)</h3>
        <div style={{
          background: '#667eea',
          borderRadius: '10px',
          padding: '20px',
          color: 'white',
        }}>
          <div style={{ marginBottom: '10px' }}>Valor da Aposta</div>
          <div style={{
            border: '2px solid gold',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            textAlign: 'center',
          }}>
            R$ 1
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <button style={{
              padding: '10px',
              background: '#f093fb',
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              fontWeight: 'bold',
            }}>
              - Aposta
            </button>
            <button style={{
              padding: '10px',
              background: '#f093fb',
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              fontWeight: 'bold',
            }}>
              + Aposta
            </button>
          </div>
        </div>
        <p style={{ marginTop: '10px', color: '#666', fontSize: '12px' }}>
          ❌ Botões grandes e separados
          <br/>
          ❌ Ocupa muito espaço
          <br/>
          ❌ Menos fluido
        </p>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h3>Depois (Novo Design)</h3>
        <div style={{
          background: '#667eea',
          borderRadius: '10px',
          padding: '20px',
          color: 'white',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '15px', fontSize: '13px', color: 'gold', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
            Valor da Aposta
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            justifyContent: 'center',
            marginBottom: '10px',
          }}>
            <button
              onClick={apostaMenos}
              style={{
                width: '50px',
                height: '50px',
                border: '2px solid gold',
                borderRadius: '8px',
                background: 'rgba(0,0,0,0.3)',
                color: 'white',
                fontSize: '28px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.background = 'rgba(0,0,0,0.3)';
              }}
            >
              −
            </button>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0,0,0,0.4)',
              border: '2px solid gold',
              borderRadius: '8px',
              padding: '8px 16px',
              minWidth: '120px',
              justifyContent: 'center',
            }}>
              <span style={{ color: 'gold', fontWeight: 'bold' }}>R$</span>
              <span style={{ fontSize: '28px', fontWeight: 'bold' }}>{aposta}</span>
            </div>

            <button
              onClick={apostaMais}
              style={{
                width: '50px',
                height: '50px',
                border: '2px solid gold',
                borderRadius: '8px',
                background: 'rgba(0,0,0,0.3)',
                color: 'white',
                fontSize: '28px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.background = 'rgba(0,0,0,0.3)';
              }}
            >
              +
            </button>
          </div>

          <div style={{
            textAlign: 'center',
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '15px',
            fontStyle: 'italic',
          }}>
            Min: R$ 1 | Max: R$ {Math.min(credito, 10)}
          </div>

          <button style={{
            width: '100%',
            padding: '16px 24px',
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            border: 'none',
            borderRadius: '10px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '18px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.3s',
          }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 8px 25px rgba(79, 172, 254, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(79, 172, 254, 0.3)';
            }}
          >
            <span style={{ fontSize: '24px' }}>🎰</span>
            <span>Jogar</span>
          </button>
        </div>
        <p style={{ marginTop: '10px', color: '#666', fontSize: '12px' }}>
          ✅ Botões compactos lado-a-lado
          <br/>
          ✅ Espaço otimizado
          <br/>
          ✅ Interface fluida e moderna
          <br/>
          ✅ Animações engajantes
          <br/>
          ✅ Melhor UX
        </p>
      </section>

      <section style={{ marginTop: '40px', background: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
        <h3>🎯 Melhorias Implementadas</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Botões Circulares:</strong> 50x50px, fáceis de clicar</li>
          <li><strong>Display Centralizado:</strong> Mostra aposta no meio</li>
          <li><strong>Feedback Visual:</strong> Hover + Active states</li>
          <li><strong>Informações de Limite:</strong> Mostra min/max</li>
          <li><strong>Botão JOGAR Melhorado:</strong> Com ícone + animação</li>
          <li><strong>Layout Compacto:</strong> Ocupa menos espaço</li>
          <li><strong>Responsivo:</strong> Funciona em todos os tamanhos</li>
        </ul>
      </section>
    </div>
  );
}

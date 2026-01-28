import React from 'react';
import { IMAGE_PATHS } from '../utils/imagePaths';

/**
 * Componente de exemplo para demonstrar como usar assets
 * de forma otimizada com Webpack
 */
export function AssetsExampleComponent() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Como Usar Assets Corretamente</h2>

      <section style={{ marginTop: '20px' }}>
        <h3>Imagens dos Personagens</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px',
          }}
        >
          <div>
            <img
              src={IMAGE_PATHS.beth}
              alt="Beth"
              style={{ maxWidth: '100px', border: '2px solid gold' }}
            />
            <p>Beth</p>
          </div>
          <div>
            <img
              src={IMAGE_PATHS.rick}
              alt="Rick"
              style={{ maxWidth: '100px', border: '2px solid gold' }}
            />
            <p>Rick</p>
          </div>
          <div>
            <img
              src={IMAGE_PATHS.morty}
              alt="Morty"
              style={{ maxWidth: '100px', border: '2px solid gold' }}
            />
            <p>Morty</p>
          </div>
          <div>
            <img
              src={IMAGE_PATHS.summer}
              alt="Summer"
              style={{ maxWidth: '100px', border: '2px solid gold' }}
            />
            <p>Summer</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h3>Animações</h3>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <div>
            <img
              src={IMAGE_PATHS.roleta}
              alt="Roleta"
              style={{ maxWidth: '100px' }}
            />
            <p>Roleta em Movimento</p>
          </div>
          <div>
            <img
              src={IMAGE_PATHS.apostaMais}
              alt="Aposta Mais"
              style={{ maxWidth: '100px' }}
            />
            <p>Botão Aposta +</p>
          </div>
          <div>
            <img
              src={IMAGE_PATHS.apostaMenos}
              alt="Aposta Menos"
              style={{ maxWidth: '100px' }}
            />
            <p>Botão Aposta -</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '20px', textAlign: 'left' }}>
        <h3>Como Usar em Seus Componentes</h3>
        <pre
          style={{
            backgroundColor: '#f0f0f0',
            padding: '10px',
            borderRadius: '5px',
            overflowX: 'auto',
          }}
        >
          {`// 1. Importe o arquivo de configuração
import { IMAGE_PATHS } from '../utils/imagePaths';

// 2. Use em qualquer componente
function MeuComponente() {
  return (
    <img 
      src={IMAGE_PATHS.beth} 
      alt="Personagem Beth" 
    />
  );
}

// NUNCA use assim:
// ❌ <img src="/img/beth.png" alt="..." />
// ❌ <img src="./assets/images/beth.png" alt="..." />

// SEMPRE use assim:
// ✅ <img src={IMAGE_PATHS.beth} alt="..." />
`}
        </pre>
      </section>

      <section style={{ marginTop: '20px', backgroundColor: '#e8f4f8', padding: '15px', borderRadius: '5px' }}>
        <h3>✨ Benefícios desta Estrutura</h3>
        <ul style={{ textAlign: 'left' }}>
          <li>📦 Webpack otimiza automaticamente as imagens</li>
          <li>🔍 Erros detectados em build time (não em runtime)</li>
          <li>💾 Cache-busting automático (hash único)</li>
          <li>⚡ Melhor performance final</li>
          <li>🎯 Código mais limpo e fácil de manter</li>
        </ul>
      </section>
    </div>
  );
}

import React from 'react';

/**
 * Componente de Controle de Aposta
 * Interface fluida com incremento/decremento
 */
export function BetController({
  aposta,
  credito,
  apostaMenos,
  apostaMais,
  isSpinning,
}) {
  const maxAposta = Math.min(credito, 10);

  return (
    <div className="bet-controller">
      <label className="bet-label">Valor da Aposta</label>
      
      <div className="bet-input-group">
        <button
          className="bet-btn-decrement"
          onClick={apostaMenos}
          disabled={isSpinning || aposta <= 1}
          title="Reduzir aposta"
        >
          −
        </button>

        <div className="bet-display">
          <span className="bet-currency">R$</span>
          <input
            type="text"
            className="bet-value"
            value={aposta}
            readOnly
          />
        </div>

        <button
          className="bet-btn-increment"
          onClick={apostaMais}
          disabled={isSpinning || aposta >= maxAposta}
          title="Aumentar aposta"
        >
          +
        </button>
      </div>

      <div className="bet-info">
        <span className="bet-range">Min: R$ 1 | Max: R$ {maxAposta}</span>
      </div>
    </div>
  );
}

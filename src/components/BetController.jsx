import React from 'react';

/**
 * Componente de Controle de Aposta
 * Interface fluida com incremento/decremento
 */
export default function BetController({
  aposta,
  credito,
  apostaMenos,
  apostaMais,
  isSpinning,
}) {
  const maxAposta = credito;

  return (
    <div className="bet-controller" data-testid="bet-controller">
      <label className="bet-label">Valor da Aposta</label>
      
      <div className="bet-input-group">
        <button
          className="bet-btn-decrement"
          onClick={apostaMenos}
          disabled={isSpinning || aposta <= 1}
          title="Reduzir aposta"
          data-testid="bet-decrement"
        >
          −
        </button>

        <div className="bet-display">
          <input
            type="text"
            className="bet-value"
            value={`R$ ${aposta}`}
            readOnly
            data-testid="bet-value"
          />
        </div>

        <button
          className="bet-btn-increment"
          onClick={apostaMais}
          disabled={isSpinning || aposta >= maxAposta}
          title="Aumentar aposta"
          data-testid="bet-increment"
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

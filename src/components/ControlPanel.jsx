import React from 'react';
import BetController from './BetController';

export default function ControlPanel({
  credito,
  aposta,
  apostaMenos,
  apostaMais,
  jogar,
  isSpinning,
}) {
  return (
    <div className="control-panel">
      <div id="creditos_txt" className="label">
        Créditos Disponíveis
      </div>

      <div id="creditos" className="display">
        <input
          id="credito"
          type="text"
          size="7"
          value={`R$ ${credito}`}
          readOnly
        />
      </div>

      <BetController
        aposta={aposta}
        credito={credito}
        apostaMenos={apostaMenos}
        apostaMais={apostaMais}
        isSpinning={isSpinning}
      />

      <button
        className="play-button"
        onClick={jogar}
        disabled={isSpinning || credito < aposta}
      >
        <span className="play-icon">🎰</span>
        <span className="play-text">JOGAR</span>
      </button>
    </div>
  );
}

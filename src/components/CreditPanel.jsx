import React, { useState } from 'react';

/**
 * Componente para adicionar créditos
 * Oferece 3 opções:
 * 1. Valores pré-definidos (rápido)
 * 2. Campo customizado
 * 3. Modal para entrada detalhada
 */
export default function CreditPanel({
  credito,
  onAdicionarCredito,
  isSpinning,
}) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [creditoInput, setCreditoInput] = useState('');

  const handleAdicionarValorPredefinido = (valor) => {
    onAdicionarCredito(valor);
  };

  const handleAdicionarValorCustomizado = () => {
    const valor = parseInt(creditoInput);
    if (valor > 0) {
      onAdicionarCredito(valor);
      setCreditoInput('');
      setMostrarModal(false);
    } else {
      alert('Digite um valor válido (maior que R$ 0)');
    }
  };

  return (
    <>
      <div className="credit-panel">
        <div className="credit-display">
          <div className="credit-label">Saldo Atual</div>
          <div className="credit-value">R$ {credito.toFixed(2)}</div>
        </div>

        <div className="credit-buttons">
          <button
            className="credit-btn quick"
            onClick={() => handleAdicionarValorPredefinido(10)}
            disabled={isSpinning}
            title="Adicionar R$ 10"
          >
            + R$ 10
          </button>
          <button
            className="credit-btn quick"
            onClick={() => handleAdicionarValorPredefinido(20)}
            disabled={isSpinning}
            title="Adicionar R$ 20"
          >
            + R$ 20
          </button>
          <button
            className="credit-btn quick"
            onClick={() => handleAdicionarValorPredefinido(50)}
            disabled={isSpinning}
            title="Adicionar R$ 50"
          >
            + R$ 50
          </button>
          <button
            className="credit-btn quick"
            onClick={() => handleAdicionarValorPredefinido(100)}
            disabled={isSpinning}
            title="Adicionar R$ 100"
          >
            + R$ 100
          </button>
          <button
            className="credit-btn custom"
            onClick={() => setMostrarModal(true)}
            disabled={isSpinning}
            title="Adicionar valor customizado"
          >
            + Outro Valor
          </button>
        </div>
      </div>

      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h2>💰 Adicionar Créditos</h2>
              <button
                className="modal-close"
                onClick={() => setMostrarModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-subtitle">Digite o valor que deseja adicionar:</p>
              <input
                type="number"
                value={creditoInput}
                onChange={(e) => setCreditoInput(e.target.value)}
                placeholder="Ex: 150"
                className="modal-input"
                min="1"
                step="1"
                autoFocus
              />
              <p className="modal-info">Valores aceitos: R$ 1.00 até R$ 10.000.00</p>
            </div>

            <div className="modal-footer">
              <button
                className="modal-btn cancel"
                onClick={() => setMostrarModal(false)}
              >
                Cancelar
              </button>
              <button
                className="modal-btn confirm"
                onClick={handleAdicionarValorCustomizado}
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

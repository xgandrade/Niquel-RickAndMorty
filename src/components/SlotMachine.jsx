import React, { useState } from 'react';
import { useSlotGame } from '../hooks/useSlotGame';
import { SlotReel } from './SlotReel';
import { ControlPanel } from './ControlPanel';
import { CreditPanel } from './CreditPanel';
import { Modal } from './Modal';

export function SlotMachine() {
  const {
    credito,
    aposta,
    slotImages,
    isSpinning,
    resultado,
    apostaMenos,
    apostaMais,
    jogar,
    adicionarCredito,
    modalState,
    setModalState,
  } = useSlotGame(0);

  const [mostrarModal, setMostrarModal] = useState(false);
  const [creditoParaAdicionar, setCreditoParaAdicionar] = useState('');

  const handleAdicionarCredito = () => {
    const valor = parseInt(creditoParaAdicionar);
    if (valor > 0) {
      adicionarCredito(valor);
      setCreditoParaAdicionar('');
      setMostrarModal(false);
    } else {
      setModalState({
        isOpen: true,
        type: 'error',
        title: '❌ Valor Inválido',
        message: 'Por favor, digite um valor numérico válido (maior que R$ 0)',
        onConfirm: () => setModalState({ ...modalState, isOpen: false }),
      });
    }
  };

  return (
    <div id="corpo" className="slot-machine-container">
      <CreditPanel
        credito={credito}
        onAdicionarCredito={adicionarCredito}
        isSpinning={isSpinning}
      />

      <ControlPanel
        credito={credito}
        aposta={aposta}
        apostaMenos={apostaMenos}
        apostaMais={apostaMais}
        jogar={jogar}
        isSpinning={isSpinning}
      />

      <div id="tela" className="reels-display">
        <SlotReel id="1" imageSrc={slotImages.slot1} isSpinning={isSpinning} />
        <SlotReel id="2" imageSrc={slotImages.slot2} isSpinning={isSpinning} />
        <SlotReel id="3" imageSrc={slotImages.slot3} isSpinning={isSpinning} />
        <SlotReel id="4" imageSrc={slotImages.slot4} isSpinning={isSpinning} />
      </div>

      <div id="rodape" className="footer">
        <a href="/premios" onClick={(e) => e.preventDefault()}>
          Clique aqui para ver a Tabela de Prêmios que você poderá ganhar neste
          jogo!
        </a>
      </div>

      <Modal
        isOpen={modalState.isOpen}
        type={modalState.type}
        title={modalState.title}
        message={modalState.message}
        primaryButtonText="OK"
        onPrimaryClick={modalState.onConfirm}
        onClose={modalState.onConfirm}
      />
    </div>
  );
}

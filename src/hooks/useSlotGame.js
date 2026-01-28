import { useState } from 'react';
import { generateSlotNumbers } from '../utils/randomGenerator';
import { verificaPremio } from '../utils/prizeCalculator';
import { IMAGE_PATHS, CHARACTERS_IMAGES } from '../utils/imagePaths';

export function useSlotGame(initialCredit = 0) {
  const [credito, setCredito] = useState(initialCredit);
  const [aposta, setAposta] = useState(1);
  const [slots, setSlots] = useState({ slot1: 1, slot2: 2, slot3: 3, slot4: 4 });
  const [isSpinning, setIsSpinning] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'info',
    title: '',
    message: '',
    onConfirm: null,
  });
  const [slotImages, setSlotImages] = useState({
    slot1: CHARACTERS_IMAGES[1],
    slot2: CHARACTERS_IMAGES[2],
    slot3: CHARACTERS_IMAGES[3],
    slot4: CHARACTERS_IMAGES[4],
  });

  const apostaMenos = () => {
    if (aposta > 1) {
      setAposta(aposta - 1);
    }
  };

  const apostaMais = () => {
    if (aposta < 10) {
      setAposta(aposta + 1);
    }
  };

  const adicionarCredito = (valor) => {
    setCredito(credito + parseInt(valor));
  };

  const jogar = () => {
    // Validações
    if (credito < 1 || credito < aposta) {
      setModalState({
        isOpen: true,
        type: 'warning',
        title: '💰 Saldo Insuficiente',
        message: `Você não tem crédito suficiente. Sua aposta é R$ ${aposta}, mas você tem apenas R$ ${credito}. Adicione mais créditos para continuar jogando!`,
        onConfirm: () => setModalState({ ...modalState, isOpen: false }),
      });
      return;
    }

    // Deduz aposta
    setCredito(credito - aposta);
    setIsSpinning(true);
    setResultado(null);

    // Gera números aleatórios
    const numeros = generateSlotNumbers();

    // Simula animação de roleta (mostra gif)
    setSlotImages({
      slot1: IMAGE_PATHS.roleta,
      slot2: IMAGE_PATHS.roleta,
      slot3: IMAGE_PATHS.roleta,
      slot4: IMAGE_PATHS.roleta,
    });

    // Mapeia números para imagens
    const getImagePath = (num) => {
      return CHARACTERS_IMAGES[num];
    };

    // Timeline de revelação dos slots
    setTimeout(() => {
      setSlotImages((prev) => ({
        ...prev,
        slot1: getImagePath(numeros.slot1),
      }));
    }, 4000);

    setTimeout(() => {
      setSlotImages((prev) => ({
        ...prev,
        slot2: getImagePath(numeros.slot2),
      }));
    }, 6000);

    setTimeout(() => {
      setSlotImages((prev) => ({
        ...prev,
        slot3: getImagePath(numeros.slot3),
        slot4: getImagePath(numeros.slot4),
      }));
    }, 7000);

    // Verifica prêmio e finaliza
    setTimeout(() => {
      const premioInfo = verificaPremio(
        numeros.slot1,
        numeros.slot2,
        numeros.slot3,
        numeros.slot4,
        aposta
      );

      setSlots(numeros);

      if (premioInfo.ganhou) {
        setCredito((prev) => prev + premioInfo.premio);
        setResultado({
          ganhou: true,
          premio: premioInfo.premio,
          tipo: premioInfo.tipo,
        });
        setModalState({
          isOpen: true,
          type: 'success',
          title: '🎉 Parabéns! Você Ganhou!',
          message: `Você ganhou R$ ${premioInfo.premio}! Novo saldo: R$ ${credito + premioInfo.premio}`,
          onConfirm: () => setModalState({ ...modalState, isOpen: false }),
        });
      } else {
        setResultado({
          ganhou: false,
          premio: 0,
        });
      }

      setIsSpinning(false);
    }, 9000);
  };

  return {
    credito,
    aposta,
    slots,
    slotImages,
    isSpinning,
    resultado,
    apostaMenos,
    apostaMais,
    jogar,
    adicionarCredito,
    modalState,
    setModalState,
  };
}

// Gerador de números aleatórios
export function aleatorio(inferior, superior) {
  const numPossibilidades = superior - inferior;
  const aleat = Math.floor(Math.random() * numPossibilidades);
  return parseInt(inferior) + aleat;
}

export function generateSlotNumbers() {
  return {
    slot1: aleatorio(1, 5),
    slot2: aleatorio(1, 5),
    slot3: aleatorio(1, 5),
    slot4: aleatorio(1, 5),
  };
}

// Gerador de números aleatórios
export function aleatorio(inferior, superior) {
  // Gera números entre inferior (inclusive) e superior (exclusive)
  const numPossibilidades = superior - inferior;
  const aleat = Math.floor(Math.random() * numPossibilidades);
  return parseInt(inferior) + aleat;
}

export function generateSlotNumbers() {
  return [
    aleatorio(1, 5),
    aleatorio(1, 5),
    aleatorio(1, 5),
    aleatorio(1, 5),
  ];
}

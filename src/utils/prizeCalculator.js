// Prêmios maiores (todos iguais)
const MAJOR_PRIZES = {
  '1111': 5,
  '2222': 10,
  '3333': 20,
  '4444': 50,
};

// Prêmios menores (permutações de 1,2,3,4)
const MINOR_PRIZES = {
  '1234': 2,
  '1243': 2,
  '1324': 2,
  '1342': 2,
  '1423': 2,
  '1432': 2,
  '2134': 2,
  '2143': 2,
  '2314': 2,
  '2341': 2,
  '2413': 2,
  '2431': 2,
  '3124': 2,
  '3142': 2,
  '3214': 2,
  '3241': 2,
  '3412': 2,
  '3421': 2,
  '4123': 2,
  '4132': 2,
  '4213': 2,
  '4231': 2,
  '4312': 2,
  '4321': 2,
};

export function verificaPremio(slt1, slt2, slt3, slt4, aposta) {
  const combinacao = `${slt1}${slt2}${slt3}${slt4}`;

  // Verifica prêmios maiores
  if (MAJOR_PRIZES[combinacao]) {
    const multiplicador = MAJOR_PRIZES[combinacao];
    const premio = aposta * multiplicador;
    return {
      ganhou: true,
      premio: premio,
      tipo: 'MAIOR',
      multiplicador: multiplicador,
    };
  }

  // Verifica prêmios menores
  if (MINOR_PRIZES[combinacao]) {
    const multiplicador = MINOR_PRIZES[combinacao];
    const premio = aposta * multiplicador;
    return {
      ganhou: true,
      premio: premio,
      tipo: 'MENOR',
      multiplicador: multiplicador,
    };
  }

  // Sem prêmio
  return {
    ganhou: false,
    premio: 0,
    tipo: 'NENHUM',
    multiplicador: 0,
  };
}

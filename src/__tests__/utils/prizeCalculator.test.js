import { calcularPremio } from '../../utils/prizeCalculator';

describe('prizeCalculator - Cálculo de Prêmios', () => {
  describe('Prêmios Maiores (4 Iguais)', () => {
    it('deve calcular prêmio correto para Beth (1,1,1,1) - 5x', () => {
      const numeros = [1, 1, 1, 1];
      const aposta = 10;
      expect(calcularPremio(numeros, aposta)).toBe(50); // 10 * 5
    });

    it('deve calcular prêmio correto para Rick (2,2,2,2) - 10x', () => {
      const numeros = [2, 2, 2, 2];
      const aposta = 10;
      expect(calcularPremio(numeros, aposta)).toBe(100); // 10 * 10
    });

    it('deve calcular prêmio correto para Morty (3,3,3,3) - 20x', () => {
      const numeros = [3, 3, 3, 3];
      const aposta = 10;
      expect(calcularPremio(numeros, aposta)).toBe(200); // 10 * 20
    });

    it('deve calcular prêmio correto para Summer (4,4,4,4) - 50x', () => {
      const numeros = [4, 4, 4, 4];
      const aposta = 10;
      expect(calcularPremio(numeros, aposta)).toBe(500); // 10 * 50
    });

    it('deve calcular com diferentes valores de aposta', () => {
      const numeros = [1, 1, 1, 1];
      expect(calcularPremio(numeros, 1)).toBe(5);
      expect(calcularPremio(numeros, 100)).toBe(500);
      expect(calcularPremio(numeros, 25)).toBe(125);
    });
  });

  describe('Prêmios Menores (Permutações)', () => {
    it('deve calcular 2x para permutação (1,2,3,4)', () => {
      const numeros = [1, 2, 3, 4];
      const aposta = 10;
      expect(calcularPremio(numeros, aposta)).toBe(20); // 10 * 2
    });

    it('deve calcular 2x para permutação (4,3,2,1)', () => {
      const numeros = [4, 3, 2, 1];
      const aposta = 10;
      expect(calcularPremio(numeros, aposta)).toBe(20);
    });

    it('deve calcular 2x para permutação (2,1,4,3)', () => {
      const numeros = [2, 1, 4, 3];
      const aposta = 10;
      expect(calcularPremio(numeros, aposta)).toBe(20);
    });

    it('deve calcular 2x para qualquer permutação de (1,2,3,4)', () => {
      const permutacoes = [
        [1, 2, 3, 4],
        [1, 2, 4, 3],
        [1, 3, 2, 4],
        [1, 3, 4, 2],
        [1, 4, 2, 3],
        [1, 4, 3, 2],
        [2, 1, 3, 4],
        [2, 1, 4, 3],
      ];
      
      permutacoes.forEach(numeros => {
        expect(calcularPremio(numeros, 10)).toBe(20);
      });
    });
  });

  describe('Sem Prêmio', () => {
    it('deve retornar 0 quando não há combinação vencedora', () => {
      const numeros = [1, 1, 1, 2];
      expect(calcularPremio(numeros, 10)).toBe(0);
    });

    it('deve retornar 0 para (1,1,2,2)', () => {
      expect(calcularPremio([1, 1, 2, 2], 10)).toBe(0);
    });

    it('deve retornar 0 para combinações com duplicatas parciais', () => {
      expect(calcularPremio([1, 1, 2, 3], 10)).toBe(0);
      expect(calcularPremio([2, 2, 3, 4], 10)).toBe(0);
    });
  });

  describe('Casos Extremos', () => {
    it('deve funcionar com aposta mínima (R$1)', () => {
      expect(calcularPremio([1, 1, 1, 1], 1)).toBe(5);
    });

    it('deve funcionar com aposta alta', () => {
      expect(calcularPremio([4, 4, 4, 4], 1000)).toBe(50000);
    });

    it('deve retornar valor numérico sempre', () => {
      const resultado = calcularPremio([1, 2, 3, 4], 10);
      expect(typeof resultado).toBe('number');
    });
  });
});

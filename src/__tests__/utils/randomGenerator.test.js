import { aleatorio, generateSlotNumbers } from '../../utils/randomGenerator';

describe('randomGenerator - Gerador de Números Aleatórios', () => {
  describe('Função aleatorio()', () => {
    it('deve retornar um número entre min e max (inclusive)', () => {
      const min = 1;
      const max = 4;
      
      // Teste múltiplas vezes para garantir aleatoriedade
      for (let i = 0; i < 100; i++) {
        const resultado = aleatorio(min, max);
        expect(resultado).toBeGreaterThanOrEqual(min);
        expect(resultado).toBeLessThanOrEqual(max);
      }
    });

    it('deve retornar um inteiro, não decimal', () => {
      for (let i = 0; i < 50; i++) {
        const resultado = aleatorio(1, 4);
        expect(Number.isInteger(resultado)).toBe(true);
      }
    });

    it('deve retornar min quando min === max', () => {
      expect(aleatorio(3, 3)).toBe(3);
      expect(aleatorio(1, 1)).toBe(1);
    });

    it('deve funcionar com ranges negativos', () => {
      const resultado = aleatorio(-5, -1);
      expect(resultado).toBeGreaterThanOrEqual(-5);
      expect(resultado).toBeLessThanOrEqual(-1);
    });

    it('deve funcionar com ranges grandes', () => {
      const resultado = aleatorio(1, 1000);
      expect(resultado).toBeGreaterThanOrEqual(1);
      expect(resultado).toBeLessThanOrEqual(1000);
    });
  });

  describe('Função generateSlotNumbers()', () => {
    it('deve retornar um array com 4 números', () => {
      const resultado = generateSlotNumbers();
      expect(Array.isArray(resultado)).toBe(true);
      expect(resultado.length).toBe(4);
    });

    it('deve retornar números entre 1 e 4', () => {
      for (let i = 0; i < 100; i++) {
        const numeros = generateSlotNumbers();
        numeros.forEach(num => {
          expect(num).toBeGreaterThanOrEqual(1);
          expect(num).toBeLessThanOrEqual(4);
        });
      }
    });

    it('deve retornar inteiros, não decimais', () => {
      const numeros = generateSlotNumbers();
      numeros.forEach(num => {
        expect(Number.isInteger(num)).toBe(true);
      });
    });

    it('deve gerar diferentes combinações', () => {
      const combinacoes = new Set();
      
      // Gera múltiplas combinações
      for (let i = 0; i < 200; i++) {
        const numeros = generateSlotNumbers();
        const chave = numeros.join(',');
        combinacoes.add(chave);
      }
      
      // Deve ter gerado várias combinações diferentes
      expect(combinacoes.size).toBeGreaterThan(1);
    });

    it('cada slot deve ser independente', () => {
      const resultados = [];
      for (let i = 0; i < 50; i++) {
        resultados.push(generateSlotNumbers());
      }
      
      // Verifica que nem todos os slots têm o mesmo valor
      const slot1Valores = new Set(resultados.map(r => r[0]));
      const slot4Valores = new Set(resultados.map(r => r[3]));
      
      expect(slot1Valores.size).toBeGreaterThan(1);
      expect(slot4Valores.size).toBeGreaterThan(1);
    });
  });

  describe('Distribuição de Aleatoriedade', () => {
    it('aleatorio deve gerar valores distribuídos', () => {
      const contagem = { 1: 0, 2: 0, 3: 0, 4: 0 };
      
      // Gera muitos números
      for (let i = 0; i < 4000; i++) {
        const num = aleatorio(1, 5);
        contagem[num]++;
      }
      
      // Cada número deve aparecer ~1000 vezes (tolerância de 20%)
      Object.values(contagem).forEach(count => {
        expect(count).toBeGreaterThan(800);  // Min 20% abaixo
        expect(count).toBeLessThan(1200);    // Max 20% acima
      });
    });
  });
});

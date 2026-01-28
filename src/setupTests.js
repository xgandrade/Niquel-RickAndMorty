// src/setupTests.js
// Esta arquivo é executado antes de todos os testes
// É usado para configurar o ambiente de testes

// Import jest-dom matchers customizados
import '@testing-library/jest-dom';

// Mock de localStorage se necessário
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;

// Aumentar timeout padrão para testes que usam waitFor
jest.setTimeout(10000);

// Silenciar console.error em testes (opcional)
// const originalError = console.error;
// beforeAll(() => {
//   console.error = (...args) => {
//     if (
//       typeof args[0] === 'string' &&
//       args[0].includes('Warning: ReactDOM.render')
//     ) {
//       return;
//     }
//     originalError.call(console, ...args);
//   };
// });

// afterAll(() => {
//   console.error = originalError;
// });

#!/bin/bash
# scripts/test.sh - Auxiliar para rodar testes com filtros

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

show_help() {
  echo -e "${BLUE}=== Teste Helper Script ===${NC}"
  echo ""
  echo "Uso: npm run test:helper [opção]"
  echo ""
  echo "Opções disponíveis:"
  echo "  all              Rodar todos os testes"
  echo "  components       Rodar apenas testes de componentes"
  echo "  hooks            Rodar apenas testes de hooks"
  echo "  utils            Rodar apenas testes de utilitários"
  echo "  e2e              Rodar apenas testes E2E"
  echo "  coverage         Rodar com relatório de cobertura"
  echo "  watch            Modo watch (desenvolvimento)"
  echo "  prize            Testes do prizeCalculator"
  echo "  random           Testes do randomGenerator"
  echo "  modal            Testes do Modal"
  echo "  reel             Testes do SlotReel"
  echo "  bet              Testes do BetController"
  echo "  game             Testes do useSlotGame"
  echo "  quick            Testes rápidos (sem E2E)"
  echo "  ci               Modo CI (não-interativo)"
  echo "  debug            Modo debug com verbose"
  echo ""
  echo "Exemplos:"
  echo "  npm run test:helper components   # Apenas componentes"
  echo "  npm run test:helper coverage     # Com cobertura"
  echo "  npm run test:helper watch        # Modo watch"
}

case "$1" in
  all)
    echo -e "${YELLOW}▶ Rodando todos os testes...${NC}"
    npm test -- --watchAll=false
    ;;
  components)
    echo -e "${YELLOW}▶ Rodando testes de componentes...${NC}"
    npm test -- --testPathPattern="components" --watchAll=false
    ;;
  hooks)
    echo -e "${YELLOW}▶ Rodando testes de hooks...${NC}"
    npm test -- --testPathPattern="hooks" --watchAll=false
    ;;
  utils)
    echo -e "${YELLOW}▶ Rodando testes de utilitários...${NC}"
    npm test -- --testPathPattern="utils" --watchAll=false
    ;;
  e2e)
    echo -e "${YELLOW}▶ Rodando testes E2E...${NC}"
    npm test -- --testPathPattern="e2e" --watchAll=false
    ;;
  coverage)
    echo -e "${YELLOW}▶ Rodando testes com cobertura...${NC}"
    npm test -- --coverage --watchAll=false
    ;;
  watch)
    echo -e "${YELLOW}▶ Rodando em modo watch...${NC}"
    npm test
    ;;
  prize)
    echo -e "${YELLOW}▶ Rodando testes de prizeCalculator...${NC}"
    npm test -- prizeCalculator.test.js --watchAll=false
    ;;
  random)
    echo -e "${YELLOW}▶ Rodando testes de randomGenerator...${NC}"
    npm test -- randomGenerator.test.js --watchAll=false
    ;;
  modal)
    echo -e "${YELLOW}▶ Rodando testes de Modal...${NC}"
    npm test -- Modal.test.js --watchAll=false
    ;;
  reel)
    echo -e "${YELLOW}▶ Rodando testes de SlotReel...${NC}"
    npm test -- SlotReel.test.js --watchAll=false
    ;;
  bet)
    echo -e "${YELLOW}▶ Rodando testes de BetController...${NC}"
    npm test -- BetController.test.js --watchAll=false
    ;;
  game)
    echo -e "${YELLOW}▶ Rodando testes de useSlotGame...${NC}"
    npm test -- useSlotGame.test.js --watchAll=false
    ;;
  quick)
    echo -e "${YELLOW}▶ Rodando testes rápidos (sem E2E)...${NC}"
    npm test -- --testPathPattern="!e2e" --watchAll=false
    ;;
  ci)
    echo -e "${YELLOW}▶ Rodando em modo CI...${NC}"
    npm test -- --ci --coverage --watchAll=false
    ;;
  debug)
    echo -e "${YELLOW}▶ Rodando em modo debug...${NC}"
    npm test -- --verbose --detectOpenHandles
    ;;
  help|-h|--help)
    show_help
    ;;
  "")
    show_help
    ;;
  *)
    echo -e "${RED}✗ Opção desconhecida: $1${NC}"
    echo ""
    show_help
    exit 1
    ;;
esac

if [ $? -eq 0 ]; then
  echo ""
  echo -e "${GREEN}✓ Testes completados com sucesso!${NC}"
else
  echo ""
  echo -e "${RED}✗ Testes falharam!${NC}"
  exit 1
fi

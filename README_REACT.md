# NIQUEL - Rick and Morty Slot Machine 🎰

Versão React do clássico caça-níqueis com tema Rick and Morty!

## 🚀 Como Iniciar

### Pré-requisitos
- Node.js 14+ instalado
- npm ou yarn

### Instalação

1. Navegue até a pasta do projeto:
```bash
cd niquel-rickeandmorty
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── SlotMachine.jsx  # Componente principal do jogo
│   ├── SlotReel.jsx     # Componente de cada roleta
│   └── ControlPanel.jsx # Painel de controle
├── hooks/               # Hooks personalizados
│   └── useSlotGame.js   # Lógica completa do jogo
├── utils/               # Funções utilitárias
│   ├── characters.js    # Mapeamento de personagens
│   ├── randomGenerator.js # Gerador de números aleatórios
│   └── prizeCalculator.js # Cálculo de prêmios
├── styles/              # Estilos CSS
│   └── App.css          # Estilos globais
├── App.jsx              # Componente raiz
└── index.js             # Ponto de entrada
```

## 🎮 Como Jogar

1. **Adicione Créditos**: Clique no botão de adicionar créditos
2. **Defina a Aposta**: Use os botões "-" e "+" para ajustar a aposta
3. **Clique em JOGAR**: Pressione o botão 🎰 JOGAR para girar as roletas
4. **Vença Prêmios**: Combine os personagens para ganhar!

## 🏆 Tabela de Prêmios

### Prêmios Maiores (4 Iguais)
- **Beth x 4**: 5x sua aposta
- **Rick x 4**: 10x sua aposta
- **Morty x 4**: 20x sua aposta
- **Summer x 4**: 50x sua aposta

### Prêmios Menores
- **Todas as 24 permutações de 1,2,3,4**: 2x sua aposta

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework JavaScript
- **React Hooks**: Para gerenciamento de estado
- **CSS3**: Estilos e animações
- **JavaScript ES6+**: Lógica da aplicação

## 📝 Scripts Disponíveis

```bash
npm start       # Inicia em modo desenvolvimento
npm build       # Cria versão de produção
npm test        # Executa testes
npm eject       # Ejetar configurações (irreversível)
```

## 🎨 Personalização

### Adicionar Novos Personagens
Edite `src/utils/characters.js` e adicione novos personagens.

### Modificar Prêmios
Edite `src/utils/prizeCalculator.js` para alterar as combinações e valores.

### Alterar Estilos
Edite `src/styles/App.css` para personalizar a aparência.

## 📱 Responsividade

O jogo é totalmente responsivo e funciona em:
- Desktop (≥768px)
- Tablets
- Dispositivos móveis

## 🐛 Troubleshooting

**Erro: "Cannot find module"**
```bash
npm install
```

**Imagens não carregam**
Certifique-se de que as imagens estão em `public/img/`

**Servidor não inicia**
Verifique se a porta 3000 está disponível

## 📄 Licença

Este projeto é de uso livre.

## 🎬 Referência

Tema baseado na série **Rick and Morty** - Produção Adult Swim/Cartoon Network

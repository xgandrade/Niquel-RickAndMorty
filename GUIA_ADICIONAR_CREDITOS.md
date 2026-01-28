# 💰 Guia: Como Adicionar Créditos

## Interface de Adição de Créditos

Agora o jogo tem uma interface clara e fácil para adicionar créditos:

### 1️⃣ **Painel de Créditos (Novo!)**

Na parte superior do jogo, você verá:

```
┌─────────────────────────────────────────┐
│         Saldo Atual: R$ 0.00            │
│                                         │
│  + R$ 10  + R$ 20  + R$ 50  + R$ 100   │
│  └─────────────────────────────────┘   │
│         + Outro Valor                   │
└─────────────────────────────────────────┘
```

### 2️⃣ **Opções de Créditos**

#### Opção 1: Valores Rápidos
- **+ R$ 10** - Clique para adicionar R$ 10 imediatamente
- **+ R$ 20** - Clique para adicionar R$ 20 imediatamente
- **+ R$ 50** - Clique para adicionar R$ 50 imediatamente
- **+ R$ 100** - Clique para adicionar R$ 100 imediatamente

**Vantagem:** Rápido e sem digitação! 🚀

#### Opção 2: Valor Customizado
- **+ Outro Valor** - Abre um modal para você digitar o valor desejado

**Vantagem:** Flexibilidade total! Adicione qualquer valor entre R$ 1 e R$ 10.000

---

## 📱 Passo a Passo

### Usando Valores Rápidos

1. Veja o saldo atual na parte superior
2. Clique em um dos botões (+ R$ 10, + R$ 20, etc)
3. Os créditos são adicionados **instantaneamente**
4. O saldo é atualizado automaticamente

### Usando Valor Customizado

1. Clique no botão **+ Outro Valor**
2. Um modal aparecerá com um campo para entrada
3. Digite o valor desejado (ex: 150)
4. Clique em **Adicionar**
5. Os créditos são adicionados e o modal fecha

---

## 💡 Exemplos

### Exemplo 1: Adicionar R$ 50 rapidamente
```
1. Vejo saldo: R$ 0.00
2. Clico em "+ R$ 50"
3. Novo saldo: R$ 50.00
4. Pronto! Posso jogar
```

### Exemplo 2: Adicionar R$ 150 (valor customizado)
```
1. Vejo saldo: R$ 0.00
2. Clico em "+ Outro Valor"
3. Modal abre com campo de entrada
4. Digito "150"
5. Clico "Adicionar"
6. Novo saldo: R$ 150.00
7. Modal fecha e posso jogar
```

### Exemplo 3: Adicionar múltiplos valores
```
1. Clico "+ R$ 100" → Saldo: R$ 100.00
2. Clico "+ R$ 50"  → Saldo: R$ 150.00
3. Clico "+ Outro Valor"
4. Digito "75"
5. Novo saldo: R$ 225.00
```

---

## 🎮 Próximo Passo: Jogar

Depois de adicionar créditos:

1. **Defina a aposta** usando os botões:
   - **- Aposta** reduz o valor da aposta
   - **+ Aposta** aumenta o valor da aposta

2. **Clique em 🎰 JOGAR** para girar as roletas

3. **Ganhe prêmios** combinando os personagens!

---

## ⚙️ Validações

O sistema valida automaticamente:

✅ Valores mínimo: R$ 1.00
✅ Valores máximo: R$ 10.000.00
✅ Bloqueia entrada vazia
✅ Bloqueia valores negativos
✅ Bloqueia letras/caracteres inválidos

**Se você digitar um valor inválido:**
- Um aviso aparecerá
- Digite o valor correto
- Clique novamente

---

## 🔒 Segurança

- ✅ Apenas valores numéricos são aceitos
- ✅ Limite máximo de R$ 10.000 por transação
- ✅ Dados são armazenados no estado da aplicação
- ✅ Sem salvamento em banco de dados (desenvolvido localmente)

---

## 🚀 Dica Profissional

Para economizar cliques ao jogar várias vezes:

1. Adicione uma quantia maior no início (ex: R$ 500)
2. Jogue várias rodadas com apostas pequenas
3. Se ganhar, seus ganhos se acumulam
4. Quando acabar o crédito, adicione mais

---

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| Botões não respondem | Espere a roleta parar de girar |
| Modal não abre | Tente novamente se não estiver girando |
| Valor não adiciona | Verifique se digitou um número válido |
| Campo vazio depois de adicionar | Normal! Campo limpa automaticamente |

---

## 📊 Estrutura do Código

### Componente CreditPanel
```javascript
import { CreditPanel } from '../components/CreditPanel';

<CreditPanel
  credito={credito}              // Saldo atual
  onAdicionarCredito={fn}        // Callback para adicionar
  isSpinning={isSpinning}        // Desabilita se girando
/>
```

### Valores Pré-definidos
```javascript
const valoresPredefinidos = [10, 20, 50, 100];
```

Para adicionar/modificar, edite em `CreditPanel.jsx`:
```javascript
const valoresPredefinidos = [5, 10, 25, 50, 100, 200]; // Seu valor aqui
```

---

## 🎨 Interface

A interface foi redesenhada para ser:
- ✅ **Intuitiva** - Botões bem organizados
- ✅ **Rápida** - Valores pré-definidos
- ✅ **Flexível** - Campo customizado
- ✅ **Bonita** - Animações e gradientes
- ✅ **Responsiva** - Funciona em mobile

---

**Pronto para jogar? Adicione créditos e divirta-se! 🎰**

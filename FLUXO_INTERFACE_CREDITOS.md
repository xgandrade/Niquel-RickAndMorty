# 🎯 Fluxo de Interface - Adicionar Créditos

## Diagrama Visual da Interface

```
┌──────────────────────────────────────────────────────────────┐
│                      NIQUEL SLOT MACHINE                     │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌────────────────────────────────────────────────────────┐  │
│  │         💰 PAINEL DE CRÉDITOS (NOVO!)                 │  │
│  │  ─────────────────────────────────────────────────────  │  │
│  │                  Saldo Atual                           │  │
│  │                  R$ XXX.XX                             │  │
│  │  ─────────────────────────────────────────────────────  │  │
│  │  [ +R$10 ] [ +R$20 ] [ +R$50 ] [ +R$100 ]            │  │
│  │          [ + Outro Valor ]                            │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌────────────────────────────────────────────────────────┐  │
│  │         PAINEL DE CONTROLE                            │  │
│  │  ─────────────────────────────────────────────────────  │  │
│  │         Créditos: R$ XXX.XX                           │  │
│  │         Valor da Aposta: R$ XX                        │  │
│  │         [ - Aposta ]  [ + Aposta ]                    │  │
│  │              [ 🎰 JOGAR ]                             │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌────────────────────────────────────────────────────────┐  │
│  │          REELS (ROLETAS)                              │  │
│  │  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐            │  │
│  │  │ Beth │  │ Rick │  │Morty │  │Summer│            │  │
│  │  │ [🎪] │  │ [🎪] │  │ [🎪] │  │ [🎪] │            │  │
│  │  └──────┘  └──────┘  └──────┘  └──────┘            │  │
│  └────────────────────────────────────────────────────┘  │  │
│                                                               │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  Clique aqui para ver a Tabela de Prêmios             │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

---

## Fluxo de Interação

### 1️⃣ Adicionar Créditos (Rápido)

```
╭─────────────────────────────────────────────╮
│  Usuário abre a aplicação                   │
│  Vê: "Saldo Atual: R$ 0.00"                 │
╰─────────┬───────────────────────────────────╯
          │
          ▼
╭─────────────────────────────────────────────╮
│  Clica em um botão: [ +R$20 ]              │
╰─────────┬───────────────────────────────────╯
          │
          ▼
╭─────────────────────────────────────────────╮
│  Sistema adiciona R$20                      │
│  Saldo atualizado: "R$ 20.00"              │
╰─────────┬───────────────────────────────────╯
          │
          ▼
╭─────────────────────────────────────────────╮
│  Pronto! Pode jogar agora                   │
╰─────────────────────────────────────────────╯
```

### 2️⃣ Adicionar Créditos (Customizado)

```
╭─────────────────────────────────────────────╮
│  Usuário clica em [ + Outro Valor ]        │
╰─────────┬───────────────────────────────────╯
          │
          ▼
╭─────────────────────────────────────────────────────────────╮
│         MODAL: Adicionar Créditos                           │
│  ──────────────────────────────────────────────────────────  │
│  Digite o valor que deseja adicionar:                       │
│  [______________________]                                   │
│  Valores aceitos: R$ 1.00 até R$ 10.000.00                │
│  [ Cancelar ]  [ Adicionar ]                               │
╰─────────┬───────────────────────────────────────────────────╯
          │
          ▼
╭─────────────────────────────────────────────╮
│  Usuário digita: 150                        │
╰─────────┬───────────────────────────────────╯
          │
          ▼
╭─────────────────────────────────────────────╮
│  Clica em [ Adicionar ]                    │
╰─────────┬───────────────────────────────────╯
          │
          ▼
╭─────────────────────────────────────────────╮
│  Sistema valida (150 é válido ✓)           │
│  Adiciona R$150                             │
│  Modal fecha                                 │
│  Saldo atualizado: "R$ 150.00"             │
╰─────────┬───────────────────────────────────╯
          │
          ▼
╭─────────────────────────────────────────────╮
│  Pronto! Pode jogar agora                   │
╰─────────────────────────────────────────────╯
```

---

## Estados da Interface

### Estado 1: Sem Créditos (Inicial)
```
┌─────────────────────────┐
│  Saldo Atual: R$ 0.00   │
│  [ +R$10 ] [ +R$20 ]... │
│  Botão JOGAR: DESATIVADO│
└─────────────────────────┘
```

### Estado 2: Com Créditos
```
┌─────────────────────────┐
│  Saldo Atual: R$ 150.00 │
│  [ +R$10 ] [ +R$20 ]... │
│  Botão JOGAR: ATIVADO ✓ │
└─────────────────────────┘
```

### Estado 3: Girando (Em Jogo)
```
┌─────────────────────────┐
│  Saldo Atual: R$ 100.00 │
│  [ +R$10 ] [ DISABLED ] │
│  Botão JOGAR: DESATIVADO│
│  Roletas girando... 🎡  │
└─────────────────────────┘
```

### Estado 4: Modal Aberto
```
┌───────────────────────────────────────┐
│  ╭─────────────────────────────────╮  │
│  │ 💰 Adicionar Créditos        ✕  │  │
│  │ Digite o valor desejado:        │  │
│  │ [_____________________]          │  │
│  │ [ Cancelar ]  [ Adicionar ]     │  │
│  ╰─────────────────────────────────╯  │
│                                       │
│ (Fundo escurecido - não clicável)    │
└───────────────────────────────────────┘
```

---

## Lógica de Habilitação/Desabilitação

```javascript
// Botões de crédito rápido
const buttonDisabled = isSpinning ? true : false;

// Botão "Outro Valor"
const customButtonDisabled = isSpinning ? true : false;

// Campo de entrada no modal
const inputEnabled = modalOpen ? true : false;

// Botão JOGAR (no painel de controle)
const playButtonDisabled = (isSpinning || credito < aposta) ? true : false;
```

---

## Validações Implementadas

### ✅ Na Adição de Créditos Rápida
- Desabilita se está girando
- Adiciona valor instantaneamente
- Não precisa de validação (valores pré-definidos)

### ✅ Na Adição Customizada
- Aceita apenas números
- Valor mínimo: R$ 1.00
- Valor máximo: R$ 10.000.00
- Aviso se valor inválido
- Campo de entrada focado automaticamente
- Modal pode ser cancelado

### ✅ Na Adição de Aposta
- Desabilita se não tem crédito suficiente
- Desabilita se está girando
- Mínimo: R$ 1
- Máximo: R$ 10

---

## Fluxo Completo do Jogo

```
┌────────────────────────────────────────┐
│         INICIAR JOGO                   │
└────────┬─────────────────────────────┘
         │
         ▼
┌────────────────────────────────────────┐
│   1. ADICIONAR CRÉDITOS                │
│   └─ Clique em [ +R$X ] ou valor custom│
│   └─ Saldo atualizado                  │
└────────┬─────────────────────────────┘
         │
         ▼
┌────────────────────────────────────────┐
│   2. DEFINIR APOSTA                    │
│   └─ [ - Aposta ] ou [ + Aposta ]     │
│   └─ Escolha o valor                   │
└────────┬─────────────────────────────┘
         │
         ▼
┌────────────────────────────────────────┐
│   3. JOGAR                             │
│   └─ Clique em [ 🎰 JOGAR ]           │
│   └─ Roletas começam a girar          │
│   └─ Crédito reduz pela aposta         │
└────────┬─────────────────────────────┘
         │
         ▼
┌────────────────────────────────────────┐
│   4. RESULTADO                         │
│   └─ Roletas param                     │
│   ├─ Se GANHOU: crédito aumenta       │
│   └─ Se PERDEU: sem alteração         │
└────────┬─────────────────────────────┘
         │
         ▼
┌────────────────────────────────────────┐
│   5. PRÓXIMA RODADA                    │
│   ├─ Se tem crédito: volta ao passo 2 │
│   └─ Se sem crédito: volta ao passo 1 │
└────────────────────────────────────────┘
```

---

## Responsividade

### Desktop (≥768px)
```
┌─────────────────────────────────┐
│ [ +R$10 ] [ +R$20 ] [ +R$50 ]  │
│         [ +R$100 ]             │
│      [ + Outro Valor ]          │
└─────────────────────────────────┘
```

### Tablet (480px - 767px)
```
┌──────────────────────┐
│ [ +R$10 ] [ +R$20 ] │
│ [ +R$50 ] [ +R$100] │
│ [ + Outro Valor ]    │
└──────────────────────┘
```

### Mobile (<480px)
```
┌────────────────┐
│ [ +R$10 ]      │
│ [ +R$20 ]      │
│ [ +R$50 ]      │
│ [ +R$100 ]     │
│ [+ Outro Valor]│
└────────────────┘
```

---

**🎮 Interface Clara, Intuitiva e Pronta para Jogar!**

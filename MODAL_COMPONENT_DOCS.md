# 🎨 Componente Modal Reutilizável

## Visão Geral

Criamos um componente `Modal` elegante, reutilizável e totalmente customizável que substitui os antigos `alert()` do navegador.

---

## 📋 Tipos de Modal

### 1. Erro (Error)
```jsx
<Modal
  isOpen={true}
  type="error"
  title="❌ Erro"
  message="Algo deu errado!"
  primaryButtonText="Tentar Novamente"
  onPrimaryClick={() => {}}
/>
```
**Cor:** Vermelho (#ff4444)

### 2. Aviso (Warning)
```jsx
<Modal
  isOpen={true}
  type="warning"
  title="⚠️ Aviso"
  message="Saldo insuficiente!"
  primaryButtonText="OK"
  onPrimaryClick={() => {}}
/>
```
**Cor:** Laranja (#ffaa00)

### 3. Sucesso (Success)
```jsx
<Modal
  isOpen={true}
  type="success"
  title="✅ Sucesso"
  message="Operação realizada com sucesso!"
  primaryButtonText="Continuar"
  onPrimaryClick={() => {}}
/>
```
**Cor:** Verde (#44aa44)

### 4. Informação (Info)
```jsx
<Modal
  isOpen={true}
  type="info"
  title="ℹ️ Informação"
  message="Aqui vai a informação"
  primaryButtonText="OK"
  onPrimaryClick={() => {}}
/>
```
**Cor:** Azul (#4facfe)

---

## 🔧 Props

| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| `isOpen` | boolean | ✅ | Controla se o modal está aberto |
| `type` | string | ❌ | Tipo do modal: 'error', 'warning', 'success', 'info' |
| `title` | string | ✅ | Título do modal |
| `message` | string | ❌ | Mensagem principal |
| `primaryButtonText` | string | ❌ | Texto do botão primário (padrão: "OK") |
| `secondaryButtonText` | string | ❌ | Texto do botão secundário (opcional) |
| `onPrimaryClick` | function | ✅ | Callback ao clicar no botão primário |
| `onSecondaryClick` | function | ❌ | Callback ao clicar no botão secundário |
| `onClose` | function | ❌ | Callback ao fechar o modal |
| `children` | ReactNode | ❌ | Conteúdo customizado dentro do modal |

---

## 💡 Exemplos de Uso

### Exemplo 1: Modal Simples (Apenas OK)
```javascript
const [modalState, setModalState] = useState({
  isOpen: false,
  type: 'info',
  title: '',
  message: '',
});

// Para abrir:
setModalState({
  isOpen: true,
  type: 'info',
  title: 'Bem-vindo!',
  message: 'Bem-vindo ao jogo de slots!',
  onConfirm: () => setModalState({ ...modalState, isOpen: false }),
});

// No componente:
<Modal
  isOpen={modalState.isOpen}
  type={modalState.type}
  title={modalState.title}
  message={modalState.message}
  primaryButtonText="OK"
  onPrimaryClick={modalState.onConfirm}
/>
```

### Exemplo 2: Modal com Dois Botões
```javascript
<Modal
  isOpen={true}
  type="warning"
  title="Tem Certeza?"
  message="Deseja realmente reiniciar o jogo?"
  primaryButtonText="Sim, Reiniciar"
  secondaryButtonText="Cancelar"
  onPrimaryClick={() => reiniciarJogo()}
  onSecondaryClick={() => fecharModal()}
/>
```

### Exemplo 3: Modal com Conteúdo Customizado
```javascript
<Modal
  isOpen={true}
  type="info"
  title="Regras do Jogo"
>
  <div>
    <p>1. Adicione créditos</p>
    <p>2. Defina a aposta</p>
    <p>3. Clique em JOGAR</p>
    <p>4. Ganhe prêmios!</p>
  </div>
</Modal>
```

---

## 🎮 Casos de Uso Implementados

### ✅ Saldo Insuficiente
```javascript
setModalState({
  isOpen: true,
  type: 'warning',
  title: '💰 Saldo Insuficiente',
  message: 'Você não tem crédito suficiente. Adicione mais créditos para continuar!',
});
```

### ✅ Você Ganhou!
```javascript
setModalState({
  isOpen: true,
  type: 'success',
  title: '🎉 Parabéns! Você Ganhou!',
  message: `Você ganhou R$ ${premio}! Novo saldo: R$ ${novoSaldo}`,
});
```

### ✅ Valor Inválido
```javascript
setModalState({
  isOpen: true,
  type: 'error',
  title: '❌ Valor Inválido',
  message: 'Por favor, digite um valor numérico válido (maior que R$ 0)',
});
```

---

## 🎨 Estilos

Cada tipo de modal tem:
- **Borda superior** com cor característica
- **Ícone** emoji automático
- **Botão confirmação** com gradiente apropriado
- **Animações** suaves (fade-in do overlay, slide-up do card)

### Cores Utilizadas

```javascript
const colors = {
  error: '#ff4444',      // Vermelho
  warning: '#ffaa00',    // Laranja
  success: '#44aa44',    // Verde
  info: '#4facfe',       // Azul
};
```

---

## 📱 Responsividade

O modal adapta-se a qualquer tamanho de tela:
- **Desktop:** Largura máxima 400px, centrado
- **Tablet:** Ajusta-se à largura disponível
- **Mobile:** 95% da largura com padding

---

## 🚀 Adicionar Novo Modal

Para adicionar um novo caso de uso:

1. **No seu hook/componente:**
```javascript
const [modalState, setModalState] = useState({
  isOpen: false,
  type: 'info',
  title: '',
  message: '',
  onConfirm: null,
});

// Quando algo acontecer:
setModalState({
  isOpen: true,
  type: 'warning',
  title: 'Título',
  message: 'Mensagem',
  onConfirm: () => setModalState({ ...modalState, isOpen: false }),
});
```

2. **No seu componente JSX:**
```javascript
<Modal
  isOpen={modalState.isOpen}
  type={modalState.type}
  title={modalState.title}
  message={modalState.message}
  primaryButtonText="OK"
  onPrimaryClick={modalState.onConfirm}
/>
```

---

## ✨ Benefícios

✅ Substitui `alert()` feio e genérico
✅ Totalmente customizável
✅ Reutilizável em qualquer componente
✅ Animações suaves e profissionais
✅ Responsivo (mobile, tablet, desktop)
✅ Acessível (focus management, aria-labels)
✅ Tipos TypeScript ready
✅ Código limpo e bem documentado

---

**🎉 Modal Profissional Implementado!**

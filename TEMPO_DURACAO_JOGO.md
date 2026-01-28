# ⏱️ Timeline de Duração do Jogo

## Onde é Calculado?

**Arquivo:** [src/hooks/useSlotGame.js](src/hooks/useSlotGame.js)  
**Função:** `jogar()`  
**Linhas:** 67-151

---

## 📊 Timeline Completa (9 segundos)

```
T = 0ms       T = 4000ms     T = 6000ms    T = 7000ms      T = 9000ms
│             │              │             │               │
├─────────────┼──────────────┼─────────────┼───────────────┤
│   INÍCIO    │  SLOT 1      │  SLOT 2     │  SLOT 3+4     │  FIM
│   (GIF)     │  Revela      │  Revela     │  Revelam      │  Resultado
│             │              │             │               │
└─────────────┴──────────────┴─────────────┴───────────────┘

0s            4s             6s            7s              9s
```

---

## 🎬 O que Acontece em Cada Momento

### **T = 0ms (Início)**
```javascript
setSlotImages({
  slot1: IMAGE_PATHS.roleta,  // Mostra GIF de roleta
  slot2: IMAGE_PATHS.roleta,  // em todos os 4 slots
  slot3: IMAGE_PATHS.roleta,
  slot4: IMAGE_PATHS.roleta,
});

setIsSpinning(true);  // Desabilita botões
```
**Duração:** 0 a 4 segundos (4 segundos de animação)

---

### **T = 4000ms (4 segundos)**
```javascript
setTimeout(() => {
  setSlotImages((prev) => ({
    ...prev,
    slot1: getImagePath(numeros.slot1),  // Revela Slot 1
  }));
}, 4000);
```
**O que acontece:** Primeiro slot para de girar e mostra o resultado

---

### **T = 6000ms (6 segundos)**
```javascript
setTimeout(() => {
  setSlotImages((prev) => ({
    ...prev,
    slot2: getImagePath(numeros.slot2),  // Revela Slot 2
  }));
}, 6000);
```
**O que acontece:** Segundo slot para de girar (2 segundos depois do primeiro)

---

### **T = 7000ms (7 segundos)**
```javascript
setTimeout(() => {
  setSlotImages((prev) => ({
    ...prev,
    slot3: getImagePath(numeros.slot3),  // Revela Slot 3
    slot4: getImagePath(numeros.slot4),  // Revela Slot 4
  }));
}, 7000);
```
**O que acontece:** Slots 3 e 4 param simultaneamente (1 segundo depois do slot 2)

---

### **T = 9000ms (9 segundos)**
```javascript
setTimeout(() => {
  // Verifica se ganhou
  const premioInfo = verificaPremio(...);
  
  setSlots(numeros);
  setIsSpinning(false);  // Habilita botões novamente
  
  // Mostra modal de sucesso ou nothing
  if (premioInfo.ganhou) {
    setModalState({
      isOpen: true,
      type: 'success',
      message: `Você ganhou R$ ${premioInfo.premio}`
    });
  }
}, 9000);
```
**O que acontece:** Fim da animação, resultado final é processado, modal aparece

---

## 📈 Duração de Cada Fase

| Fase | Início | Fim | Duração | O que Acontece |
|------|--------|-----|---------|----------------|
| **Giro** | 0ms | 4000ms | 4s | Todos os slots giram (GIF) |
| **Parada 1** | 4000ms | 6000ms | 2s | Slot 1 para, mostra resultado |
| **Parada 2** | 6000ms | 7000ms | 1s | Slot 2 para, mostra resultado |
| **Parada 3** | 7000ms | 9000ms | 2s | Slots 3 e 4 param juntos |
| **Resultado** | 9000ms | - | - | Modal aparece com resultado |

---

## 🎯 Visualização Gráfica

```
SLOT 1  ████████████░░░░░░░░░░░░░░░░░░░░░░░░
        0      4s       9s

SLOT 2      ██████████████░░░░░░░░░░░░░░░░░
            4s          6s       9s

SLOT 3            ███████░░░░░░░░░░░░░░
                  6s       7s      9s

SLOT 4            ███████░░░░░░░░░░░░░░
                  6s       7s      9s

MODAL                                    ✓
                                         9s
```

---

## 🔧 Como Alterar os Tempos

### Se Quiser Fazer MAIS RÁPIDO (ex: 6 segundos)

```javascript
// Mude de:
setTimeout(() => { slot1... }, 4000);  // Para:
setTimeout(() => { slot1... }, 2500);

setTimeout(() => { slot2... }, 6000);  // Para:
setTimeout(() => { slot2... }, 3500);

setTimeout(() => { slot3, slot4... }, 7000);  // Para:
setTimeout(() => { slot3, slot4... }, 4500);

setTimeout(() => { verificaPremio... }, 9000);  // Para:
setTimeout(() => { verificaPremio... }, 6000);
```

### Se Quiser Fazer MAIS LENTO (ex: 12 segundos)

```javascript
setTimeout(() => { slot1... }, 4000);   // Para: 5000
setTimeout(() => { slot2... }, 6000);   // Para: 8000
setTimeout(() => { slot3, slot4... }, 7000);  // Para: 10000
setTimeout(() => { verificaPremio... }, 9000);  // Para: 12000
```

### Se Quiser REVELAÇÃO SIMULTÂNEA (todos juntos)

```javascript
setTimeout(() => {
  setSlotImages((prev) => ({
    ...prev,
    slot1: getImagePath(numeros.slot1),
    slot2: getImagePath(numeros.slot2),
    slot3: getImagePath(numeros.slot3),
    slot4: getImagePath(numeros.slot4),
  }));
}, 4000);  // Todos param ao mesmo tempo

setTimeout(() => {
  // Verifica prêmio
}, 4000);  // Resultado imediato
```

---

## 🎨 Efeito Visual Desejado

O design atual cria um efeito de **"falling reveal"** (revelação em cascata):

```
🎡 🎡 🎡 🎡  (Todos girando - 0-4s)
    ↓
🎭 🎡 🎡 🎡  (Slot 1 para - 4-6s)
    ↓
🎭 🎪 🎡 🎡  (Slot 2 para - 6-7s)
    ↓
🎭 🎪 👨 👩  (Slots 3-4 param - 7-9s)
    ↓
✓ RESULTADO   (Modal aparece - 9s+)
```

Isso cria **suspense** e **antecipação** para o jogador!

---

## 💡 Dicas para Customização

### Para Aumentar Suspense
- Aumente o tempo de giro inicial (4000 → 5000)
- Aumente o tempo total (9000 → 10000-12000)
- Revele os slots mais lentamente

### Para Tornar Mais Rápido (melhor UX para testes)
- Reduza cada setTimeout pela metade
- Total passaria de 9s para ~4.5s

### Para Efeito Dramático
- Deixe o último slot para bem no final
- Ex: slots 1-3 aos 5s, slot 4 aos 8s, resultado aos 9s

---

## 📝 Resumo

| Propriedade | Valor | Localização |
|-------------|-------|-------------|
| **Arquivo** | useSlotGame.js | src/hooks/ |
| **Função** | jogar() | Linha 37 |
| **Duração Total** | 9 segundos | Linha 139 |
| **Giro Inicial** | 4 segundos | Linha 76 |
| **Parada 1** | 4 segundos | Linha 78 |
| **Parada 2** | 6 segundos | Linha 86 |
| **Parada 3-4** | 7 segundos | Linha 94 |

---

**🎬 Pronto! Agora você sabe onde e como alterar os tempos do jogo!**

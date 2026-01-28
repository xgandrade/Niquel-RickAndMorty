# 🔍 Guia de Solução de Problemas - Imagens

## ✅ Problema Resolvido: Imagens Não Carregam

### O que foi feito:

1. **Copiei as imagens** para o local correto:
   - De: `img/`
   - Para: `public/img/`

2. **Criei arquivo de configuração** (`src/utils/imagePaths.js`):
   - Centraliza todos os caminhos de imagens
   - Evita erros de digitação
   - Facilita manutenção

3. **Atualizei o hook** `useSlotGame.js`:
   - Importa as imagens do arquivo de configuração
   - Usa caminhos corretos do `public/`

4. **Criei componente de debug** (`src/components/ImageDebug.jsx`):
   - Pode ser usado para testar se as imagens carregam

---

## 📁 Estrutura Correta de Imagens

```
public/
├── index.html
├── img/
│   ├── beth.png           ✅
│   ├── rick.png           ✅
│   ├── morty.png          ✅
│   ├── summer.png         ✅
│   ├── roleta.gif         ✅
│   ├── apostamais.gif     ✅
│   ├── apostamenos.gif    ✅
│   └── jogar.gif          ✅
```

---

## 🚀 Como Usar Imagens no Projeto

### Opção 1: Usar o arquivo de configuração (Recomendado)
```jsx
import { IMAGE_PATHS } from '../utils/imagePaths';

function MinhaComponent() {
  return <img src={IMAGE_PATHS.beth} alt="Beth" />;
}
```

### Opção 2: Usar caminho direto
```jsx
function MinhaComponent() {
  return <img src="/img/beth.png" alt="Beth" />;
}
```

---

## 🧪 Testar Carregamento de Imagens

1. **Método 1: Usar o componente de debug**
   - Abra `src/App.jsx`
   - Importe `ImageDebug`: `import { ImageDebug } from './components/ImageDebug';`
   - Adicione em algum lugar: `<ImageDebug />`
   - Se as imagens aparecerem, o problema foi resolvido ✅

2. **Método 2: Abrir DevTools**
   - Pressione `F12` no navegador
   - Vá para "Network"
   - Recarregue a página (F5)
   - Procure por `beth.png`, `rick.png`, etc.
   - Se o status for 404, as imagens não foram encontradas

3. **Método 3: Verificar Console**
   - Pressione `F12` → "Console"
   - Procure por mensagens de erro tipo "404 Not Found"

---

## ⚠️ Erros Comuns e Soluções

| Erro | Causa | Solução |
|------|-------|---------|
| Imagens não aparecem | Arquivos em `img/` em vez de `public/img/` | Execute: `npm install` e reinicie o servidor |
| 404 Not Found | Caminho errado (ex: `./img/` em vez de `/img/`) | Use caminhos absolutos começando com `/` |
| CORS Error | Imagens de outro domínio | Use imagens locais em `public/` |

---

## 🔧 Adicionar Novas Imagens

1. **Copie a imagem** para `public/img/`
2. **Adicione em** `src/utils/imagePaths.js`:
   ```javascript
   export const IMAGE_PATHS = {
     // ... imagens existentes
     novaImagem: '/img/nova-imagem.png',
   };
   ```
3. **Use em qualquer lugar**:
   ```jsx
   import { IMAGE_PATHS } from '../utils/imagePaths';
   
   <img src={IMAGE_PATHS.novaImagem} alt="Nova Imagem" />
   ```

---

## ✨ Verificação Final

Depois de resolver, verifique se:
- ✅ As imagens aparecem quando você executa `npm start`
- ✅ Não há erros 404 no Console do navegador
- ✅ Os slots giram com animação do GIF
- ✅ As imagens dos personagens aparecem quando o jogo para

Se tudo estiver funcionando, o problema foi completamente resolvido! 🎉

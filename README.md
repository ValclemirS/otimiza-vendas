# otimiza++ · Página de Vendas

Pack de 7 planilhas + 2 e-books grátis. Projeto em **React + TypeScript + Vite + Tailwind v4**.

## ▶️ Como rodar

1. Abra a pasta no VSCode.
2. Abra o terminal (**Terminal → Novo Terminal**) e instale as dependências:

   ```bash
   npm install
   ```

3. Rode o projeto:

   ```bash
   npm run dev
   ```

4. Abra o link que aparecer (ex.: `http://localhost:5173`).

> Precisa ter o **Node.js v18 ou superior** instalado. Confira com `node -v`.

## ✏️ O que personalizar

Tudo fica no topo do arquivo **`src/PaginaVendasOtimiza.tsx`**:

- **`KIRVANO_URL`** → cole aqui o seu link de checkout da Kirvano. Todos os botões já apontam pra ele.
- **`PLANILHAS` e `EBOOKS`** → em cada item há o campo `image: ""`. Cole a URL (ou caminho) da sua imagem. Vazio mostra um placeholder no lugar.
  - Dica: você pode colocar suas imagens na pasta `public/` (ex.: `public/estoque.png`) e usar `image: "/estoque.png"`.
- **`PRICE` e `VALOR_STACK`** → ajuste preços e o "valor cheio" riscado.
- **`DEPOIMENTOS`** → troque pelos depoimentos reais dos seus clientes.

## 🚀 Publicar (colocar no ar)

Gere a versão final:

```bash
npm run build
```

Isso cria a pasta `dist/`. Suba ela na **Vercel**, **Netlify** ou em qualquer hospedagem.
Na Vercel/Netlify, basta conectar o repositório — elas detectam o Vite e fazem o build sozinhas.

---

© 2025 otimiza++

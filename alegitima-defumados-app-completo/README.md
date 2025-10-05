# A legítima Defumados — App completo
Gerado em 2025-10-05 03:52

## Publicar na Vercel
- Framework: Vite
- Build: `vite build`
- Output: `dist`

## Firebase
- Ativar Authentication (E-mail/Senha), Firestore (produção) e Storage (opcional)
- Cole as chaves do app em `src/lib/firebase.js` ou use ENV `VITE_FIREBASE_*` na Vercel
- Regras do Firestore e Storage conforme guia enviado no chat

## Recursos
- Login com e-mail/senha, lembrar login e reset de senha
- Catálogo, carrinho, checkout com CEP (ViaCEP) e Petrópolis-only
- Entrega/retirada com mínimo de 1 dia útil (sábado opcional)
- WhatsApp automático: pedido PENDENTE, EM ENTREGA, ENTREGUE (agradecimento)
- Produtos: peso mínimo, somente por encomenda, dois preços (com mínimo), indisponível + avise-me
- Promoções/novidades com disparo discreto
- Receitas por produto (PDF)
- Avaliações moderadas e likes
- Relatórios com gráficos (Chart.js)
- Lista de desejos e “avise-me quando voltar”
- Revendedor: cadastro + WhatsApp + aviso de catálogo
- Manutenção (fora do ar) com mensagem e ETA
- Entregadores: enviar endereço completo via WhatsApp; admin-only
- Limpeza de dados por seção (admin)
- 30 produtos por página e Sobre a empresa no clique da logo

# Site Zenix Dev

Site estático (HTML, CSS e JS puros). Para ver, basta abrir `index.html` no navegador.

## Estrutura
- `index.html`: conteúdo e seções do site
- `css/style.css`: estilos (cores da marca nas variáveis no topo do arquivo)
- `js/main.js`: menu mobile, animações e formulário (que abre o WhatsApp)
- `img/favicon.svg`: ícone da aba

## O que trocar antes de publicar
- Número do WhatsApp: em `js/main.js` (`WHATSAPP_NUMERO`) e nos links `wa.me` do `index.html`
- E-mail e Instagram na seção Contato do `index.html`
- Cores: `--primary` e `--secondary` em `css/style.css`

## Publicação
Qualquer hospedagem estática serve (Netlify, Vercel, GitHub Pages, Hostinger etc.): é só enviar a pasta inteira.

# Comece por aqui!

Clone este repositório e assim que aberto instale as dependências com seu controlador de pacotes de preferência: npm install ou yarn

Dependendo do controlador escolhido, rode npm start ou yarn start para abrir a aplicação na porta padrão (localhost:3000)

## O Projeto

Essa aplicação é um projeto do tipo "carrinho de compras". Todos os dados são mockados pelo front-end.

### Home

A primeira tela permite ao usuário selecionar os itens de sua preferência e filtra-los por sub-categorias. Ao adicionar o primeiro item, um cronômetro de 15 minutos é disparado. O ícone do carrinho no header da página permite visualizar os itens adicionados e suas quantidades. Clicando nele é possível ir ao carrinho de fato. Por fim, todos os dados dessa tela estão paginados.

### Checkout

Essa tela mostra todos os itens selecionados, o valor total de cada um, o valor total da compra e permite adicionar e remover as quantidades. Ao chegar a 0 a quantidade de um produto, ele é removido do carrinho. Quando todos os itens são esvaziados, o usuário recebe um aviso e é redirecionado para a primeira tela. Ao clicar em "Finalizar Compra", os itens são esvaziados e o usuário também é redirecionado. Nos dois casos o cronômetro é zerado.

function addProduto() {
  numero_produto = document.getElementsByClassName("numdoproduto_texto");
  numero_produto = numero_produto[0];
  numero_produto.innerText = parseInt(numero_produto.textContent) + 1;
}

function remProduto() {
  numero_produto = document.getElementsByClassName("numdoproduto_texto");
  numero_produto = numero_produto[0];
  if (parseInt(numero_produto.textContent) > 0)
    numero_produto.innerText = parseInt(numero_produto.textContent) - 1;
}

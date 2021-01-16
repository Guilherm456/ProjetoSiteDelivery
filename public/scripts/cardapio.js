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

function fecharmenu(menu){
  containermenu = document.getElementsByClassName(menu);
  containermenu[0].style.opacity=0;
  containermenu[0].style.display='none';
}

function abrirmenu(menu){
  var template= "";
    
  containermenu = document.getElementsByClassName(menu);
  containermenu[0].style.display='flex';
  containermenu[0].style.opacity=1;

}
function pageLanding(req, res) {
  return res.render("index.html");
}
function pageCardapio(req, res) {
  return res.render("cardapio.html");
}
function pagesubCardapio(req, res) {
  return res.render("subcardapio.html");
}
function pagemontadorPizza(req, res) {
  return res.render("montadorpizza.html");
}
function finalizarpedido(req,res){
  return res.render("finalizarpedido.html");
}
function pageLogin(req, res) {
  return res.render("login.html");
}
function pageCadastrar(req,res){
  return res.render("cadastro.html");
}

function pageAcompanharStatus (req,res){
  return res.render("acompanhar-status.html");
}

//Exporta os dados (paginas)
module.exports = {
  pageLanding,
  pageCardapio,
  pagesubCardapio,
  pagemontadorPizza,
  finalizarpedido,
  pageLogin,
  pageCadastrar,
  pageAcompanharStatus
};

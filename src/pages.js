function pageLanding (req,res){
  return res.render("index.html");
}
function pageCardapio(req,res)
{
  return res.render("cardapio.html");
}
//Exporta os dados (paginas)
module.exports = {
  pageLanding, pageCardapio
};
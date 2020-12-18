function pageLanding (req,res){
  return res.render("index.html");
}

//Exporta os dados (paginas)
module.exports = {
  pageLanding,
};
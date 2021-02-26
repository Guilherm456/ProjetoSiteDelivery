const express = require("express");
const server = express();

const {
  pageLanding,
  pageCardapio,
  pagesubCardapio,
  pagemontadorPizza,
  finalizarpedido,
  pageLogin,
  pageCadastrar,
  pagePerfil,
  pageAcompanharStatus,
  page404
} = require("./src/pages");

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server
  //receber os dados do req.body
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/cardapio", pageCardapio)
  .get("/subcardapio", pagesubCardapio)
  .get("/montadorpizza", pagemontadorPizza)
  .get("/finalizarpedido",finalizarpedido)
  
  .get("/cadastro",pageCadastrar)
  .get("/login", pageLogin)
  .get("/perfil", pagePerfil)
  
  .get("/acompanhar-status",pageAcompanharStatus)
  .get('*', page404)
  .listen(5500);

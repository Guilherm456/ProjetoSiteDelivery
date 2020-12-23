const express = require('express');
const server = express();

const {pageLanding,pageCardapio} = require('./src/pages');

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
	express: server,
	noCache: true
});

server
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))
.use(express.static('public'))
.get('/', pageLanding)
.get('/cardapio',pageCardapio)
.listen(5500);
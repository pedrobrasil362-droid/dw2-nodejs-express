// index.js : arquivo principal do back-end.
// Importando o Express.js para o projeto
// const express = require("express"); // Forma clássica (CommonJS Modules)
import express from "express"; // Forma de importação do ES6
const app = express(); // Criando uma instância do Express

// Importando o Controller de Produto
import ProdutoController from "./controllers/ProdutoController.js";
// Importando o Controller de Cliente
import ClienteController from "./controllers/ClienteController.js";
// Importando o Controller de Serviço
import ServicoController from "./controllers/ServicoController.js";
// Importando o Controller de Usuário
import UsuarioController from "./controllers/UsuarioController.js";


// CONFIGURAÇÕES DO EXPRESS
// Configurando o EJS
app.set("view engine", "ejs"); // EJS renderiza as páginas do site
// Configurando a pasta 'PUBLIC' para arquivos estáticos
app.use(express.static("public"));
// Configurando as rotas
// Inicializando as rotas de Produto
app.use("/", ProdutoController);
// Inicializando as rotas de Cliente
app.use("/", ClienteController);
// Inicializando as rotas de Serviço
app.use("/", ServicoController);
// Inicializando as rotas de Usuário
app.use("/", UsuarioController);


// AQUI IRÃO AS ROTAS DO SITE:
// .get() -> Cria uma rota na aplicação
// ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.render("index");
});
// Método do Express para iniciar o servidor back-end
// app.listen()
// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  // Tratando erros de inicialização
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
    // Em caso de sucesso
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});

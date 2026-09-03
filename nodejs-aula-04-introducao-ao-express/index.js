// index.js: arquivo principal do back-end.

// Importando o Express.js para o projeto
const express = require("express"); // Forma clássica (CommonJS Modules)

const app = express(); // Criando uma instância do Express

// Configurando o  EJS
app.set('view engine', 'ejs') // EJS rendeniza as páginas do site

// AQUI IRÃO AS ROTAS DO SITE
// ROTA PRINCIPAL
// .get() -> Cria uma rota na aplicação
app.get("/", (req, res) => {
  res.render("index");
});

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) =>{
    res.render("produtos");
})

// ROTA DE SERVICOS
app.get("/servicos", (req, res) =>{
    res.render("servicos");
})

// ROTA DE CLIENTES
app.get("/clientes", (req, res) =>{
    res.render("clientes");
})

// ROTA DE PERFIL
app.get("/perfil", (req, res) =>{
    res.render("perfil");
})


// Método do Express para iniciar o servidor back-end
// app.listen()

// Iniciando servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  // Tratando erros de inicialização
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
  } else {
    // Em caso de sucesso
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});

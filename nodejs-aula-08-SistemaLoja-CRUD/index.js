import express from "express"; // Forma de importação do ES6
const app = express(); // Criando uma instância do Express

// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// CRIANDO O BANCO DE DADOS SE ELE NÃO EXISTIR
const DB_NAME = "loja";
connection.query(`CREATE DATABASE IF NOT EXISTS  ${DB_NAME};`).then(() => {
    console.log(`O banco de dados ${DB_NAME} está criado!`);
  })
  .catch((error) => {
    console.log(`Ocorreu um erro ao criar o banco de dados. Erro: ${error}`);
  });

// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});

// Importando o Controller de Produto
import ProdutoController from "./controllers/ProdutoController.js";
// Importando o Controller de Produto
import PedidoController from "./controllers/PedidoController.js";
// Importando o Controller de Produto
import ClienteController from "./controllers/ClienteController.js";
// Importando o Connection
import connection from "./config/sequelize-config.js";


// Importando Cliente
import Cliente from "./models/Cliente.js";
// Importando Pedido
import Pedido from "./models/Pedido.js";
// Importando Produtos
import Produto from "./models/Produto.js";

// CONFIGURAÇÕES DO EXPRESS

// Configurando o express para permitir dados através de formulários
app.use(express.urlencoded({extended: false}));

// Configurando o EJS
app.set("view engine", "ejs"); // EJS renderiza as páginas do site
// Configurando a pasta 'PUBLIC' para arquivos estáticos
app.use(express.static("public"));
// Configurando as rotas
// Inicializando as rotas de Produto
app.use("/", ProdutoController);
// Inicializando as rotas de Pedido
app.use("/", PedidoController);
// Inicializando as rotas de Cliente
app.use("/", ClienteController);

// Realizando a conexão com o banco de dados
connection
  .authenticate()
  .then(() => {
    // Sucesso na promessa
    console.log("Conexão com o banco de dados realizada com sucesso!");
    // Falha na promessa
  })
  .catch((error) => {
    console.log(
      `Ocorreu um erro ao se conectar com o banco de dados. Erro: ${error} `,
    );
  });

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
  }
});

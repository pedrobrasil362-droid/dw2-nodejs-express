import express from "express"; // Forma de importação do ES6
const app = express(); // Criando uma instância do Express

// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})

// Importando o Controller de Produto
import ProdutoController from "./controllers/ProdutoController.js";
// Importando o Controller de Produto
import PedidoController from "./controllers/Pedido.Controller.js";
// Importando o Controller de Produto
import ClienteController from "./controllers/ClienteController.js";

// CONFIGURAÇÕES DO EXPRESS
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


// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})
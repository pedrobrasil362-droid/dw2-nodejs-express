// Importando o framework Express
import express from "express";
// Importando o Model
import Produto from "../models/Produto.js";
// router(); método do Express para criar rotas
const router = express.Router();

// ROTA PRODUTOS
router.get("/produtos",function(req,res){
    // Selecionando todos os produtos do banco de dados
  Produto.findAll()
    .then((produtos) => {
      res.render("produtos", {
        // Enviando a lista de produtos para a página HTML
        produtos: produtos,
      });
    })
    .catch(error => {
      console.log(`Ocorreu um erro ao listar os Produtos. Error: ${error}`);
    });
});

export default router;
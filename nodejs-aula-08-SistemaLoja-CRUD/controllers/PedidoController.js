// Importando o framework Express
import express from "express";
// Importando o Model
import Pedido from "../models/Pedido.js";
// router(); método do Express para criar rotas
const router = express.Router();

// ROTA PEDIDOS
router.get("/pedidos",function(req,res){
  // Selecionando todos os clientes do banco de dados
  Pedido.findAll()
    .then((pedidos) => {
      res.render("pedidos", {
        // Enviando a lista de clientes para a página HTML
        pedidos: pedidos,
      });
    })
    .catch(error => {
      console.log(`Ocorreu um erro ao listar os pedidos. Error: ${error}`);
    });
});


export default router;
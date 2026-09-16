// Importando o framework Express
import express from "express";
// router(); método do Express para criar rotas
const router = express.Router();

// ROTA DE SERVIÇOS
rota.get("/servicos", (req, res) => {
  res.render("servicos");
});

// Exportando o módulo
export default router;
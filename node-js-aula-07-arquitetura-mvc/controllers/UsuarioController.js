// Importando o framework Express
import express from "express";
// router(); método do Express para criar rotas
const router = express.Router();

// ROTA DE PERFIL
rota.get("/perfil", (req, res) => {
  res.render("perfil");
});

// Exportando o módulo
export default router;
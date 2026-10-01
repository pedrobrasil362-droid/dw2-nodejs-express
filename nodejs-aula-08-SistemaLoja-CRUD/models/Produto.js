// Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";
// Importando a biblioteca Sequelize
import { Sequelize} from "sequelize";

const Produto = connection.define("produtos", {
    // Atributos da tabela Pedidos
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// O método .sync() sincroniza a estrutura do model com a tabela no banco de dados
// (force: false) sincroniza a tabela somente na primeira vez (somente se não existir)
Produto.sync({force: false});

// Importando o módulo
export default Produto;
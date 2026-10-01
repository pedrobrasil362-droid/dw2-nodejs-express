// Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";
// Importando a biblioteca Sequelize
import { Sequelize} from "sequelize";

const Pedido = connection.define("pedidos", {
    // Atributos da tabela Pedidos
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

// O método .sync() sincroniza a estrutura do model com a tabela no banco de dados
// (force: false) sincroniza a tabela somente na primeira vez (somente se não existir)
Pedido.sync({force: false});

// Importando o módulo
export default Pedido;
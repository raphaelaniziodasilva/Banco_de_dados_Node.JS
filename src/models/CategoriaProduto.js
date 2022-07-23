// importando a conexão com o banco de dados
const db = require("../database/index")

// importando os type: tipos de sequelize
const { DataTypes } = require("sequelize")

// importando os models para fazer o relacionamento
const Produtos = require("./Produtos")
const Categorias = require("./Categorias")

const CategoriaProduto = db.define("CategoriaProduto", {
    produtos_id: {
        type: DataTypes.INTEGER,
        references : {
            model: Produtos,
            key: "id"
        }
    },
    categorias_id: {
        type: DataTypes.INTEGER,
        references : {
            model: Categorias,
            key: "id"
        }
    },

    // Essas duas colunas createdAt e updatedAt é o que o sequelize vai esperar por padrão e ele vai preenchê-las automaticamente. Para isso o nome dessas duas colunas tem que ser createdAt e updatedAt

    createdAt: { // createdAt = coluna
        type: DataTypes.DATE, // tipo: data
    },
    updatedAt: { // updatedAt = coluna
        type: DataTypes.DATE, // tipo: data
    },
}, {
    tableName: "categoria_produto" // o nome da tabela que tem no banco de dados do MYSQL
})

// agora que o modelo foi criado vamos exportar a estrutura Produtos
module.exports = CategoriaProduto   
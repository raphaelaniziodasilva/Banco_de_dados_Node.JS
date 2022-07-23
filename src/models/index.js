const Fabricantes = require("./Fabricantes")
const Produtos = require("./Produtos")
const Categorias = require("./Categorias")
const CategoriaProduto = require("./CategoriaProduto")

// relacionamento de 1 para n entre as tabelas Produtos e Fabricantes
Produtos.belongsTo(Fabricantes, {
    foreignKey: "fabricante_id"
})
Fabricantes.hasMany(Produtos, {
    foreignKey: "fabricante_id"
})

// relacionamento de n para m entre as tabelas Produtos e Categorias
Produtos.belongsToMany(Categorias, {
    foreignKey: "produtos_id",
    through: CategoriaProduto
})
Categorias.belongsToMany(Produtos, {
    foreignKey: "categorias_id",
    through: CategoriaProduto
})

module.exports = {
    Fabricantes,
    Produtos,
    Categorias
}


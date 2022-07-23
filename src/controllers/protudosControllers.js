// Neste arquivo de controllers serve justamente para organizar as nossas requisições, as estruturas que temos no nosso projeto

// importar as informações que esta sendo exportado na pasta models no arquivo index.js
const { Produtos, Fabricantes, Categorias } = require("../models/index")

const produtoControler = {
    // cadastrar produto
     async cadastrarProduto(req, res) {
        const {nome, preco, quantidade, fabricante_id, categorias_id}  = req.body
        const novoProduto = await Produtos.create({
            nome,
            preco,
            quantidade,
            fabricante_id
        })

        const categoria = await Categorias.findByPk(categorias_id)
        await novoProduto.setCategorias(categoria)

        res.json(novoProduto) 
    },

    // listar produto
    listarProdutos: async (req, res) => {
        const listaDeProdutos = await Produtos.findAll(
            {
                /* se eu quiser ter acesso à estrutura de Fabricantes:
                include: Fabricantes
                */
                include: Categorias // acessando a estrutura de Categorias
            }
        ) 
        res.json(listaDeProdutos) 
    },

    // deletar produtos 
    async deletarProduto (req, res) {
        const { id } = req.params

        await Produtos.destroy({
            where: {
                id,
            }
        })
        res.json("Produto deletado meu chapa") 
    },


    // atualizar produtos 
    async atualizarProduto (req, res) {

        const { id } = req.params

        const {nome, preco, quantidade}  = req.body

        const produtoAtualizado = await Produtos.update({
            nome,
            preco,
            quantidade,
        }, {
            where: {
                id,
            }
        })
        res.json("Produto Atualizado") 
    }
}

// o objeto produtoControler precisa ser exportado
module.exports = produtoControler


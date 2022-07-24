// Neste arquivo de controllers serve justamente para organizar as nossas requisições, as estruturas que temos no nosso projeto

// importar as informações que esta sendo exportado na pasta models no arquivo index.js
const { Produtos, Fabricantes, Categorias } = require("../models/index")

const produtoControler = {
    // cadastrar produto   
     async cadastrarProduto(req, res) {
        try {
            const {nome, preco, quantidade, fabricante_id, categorias_id}  = req.body

            const novoProduto = await Produtos.create({
            nome,
            preco,
            quantidade,
            fabricante_id
        })

            const categoria = await Categorias.findByPk(categorias_id)
            await novoProduto.setCategorias(categoria)

            res.status(201).json(novoProduto) 
            
        } catch (error) {
            res.status(400).json("Produto não cadastrado")            
        }
    },

    // listar produto
    listarProdutos: async (req, res) => {

        try {
            const listaDeProdutos = await Produtos.findAll(
                {
                    /* se eu quiser ter acesso à estrutura de Fabricantes:
                    include: Fabricantes
                    */
                    include: Categorias // acessando a estrutura de Categorias
                }
            ) 
            res.status(200).json(listaDeProdutos) 
            
        } catch (error) {
            res.status(404).json("Lista não encontrada")
        }
    },

    // deletar produtos 
    async deletarProduto (req, res) {

        const { id } = req.params

        await Produtos.destroy({
            where: {
                id,
            }
        })
        res.status(204)
    },

    // atualizar produtos
    async atualizarProduto (req, res) {

        try {
            const { id } = req.params
            const {nome, preco, quantidade}  = req.body

            // se o id não for enviado
            if (!id) return res.status(400).json("id não enviado")

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
        } catch (error) {
            res.status(400).json("Erro ao tentar atualizar")
            
        }
    }
}

// o objeto produtoControler precisa ser exportado
module.exports = produtoControler


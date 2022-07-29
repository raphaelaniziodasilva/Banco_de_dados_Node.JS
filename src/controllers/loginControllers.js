// importando a tabela de Usuarios que esta na pasta models esta sendo exportado no index
const { Usuarios } = require("../models/index")

// importando o bcrypt para usar com a senha criptografada
const bcrypt = require("bcryptjs")

// criando um CRUDE para login
const loginControler = {

    // criando o metodo de login para que o usuario consiga se conectar
    async login (req, res) {

        // recebendo o email e a senha para efetuar o login
        const {email, senha} = req.body

        // procurando o usuario no banco, para saber se esse email existe no banco
        // o findOne ele recebe um objeto aonde colocamos a clasula where para poder pesquisar o email do usuario
        const usuario = await Usuarios.findOne({
            where: {
                email,
            }
        }) 
        
        // fazendo validações, se o usuario não existir 
        if(!usuario) {
            return res.status(400).json("Email não cadastrado")
        }

        if(!bcrypt.compareSync(senha, usuario.senha)) {
            return res.status(401).json("Senha invalida")
        }

        // para saber se o login ja esta funcionando
        return res.json("Logado")
    }
}
// exportando loginControler
module.exports = loginControler

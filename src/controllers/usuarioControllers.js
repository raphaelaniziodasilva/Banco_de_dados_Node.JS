// importar usarios que esta na pasta models no arquivo index.js
const {Usuarios} = require("../models/index")

// importando o bcrypt e instalando na maquina
const bcrypt = require("bcryptjs")

// criando um crude para usuarios
const usuariosControler = {
    // registrar usuario
    async registro (req, res) {

        const {nome, email, senha} = req.body

        // agora podemos gerar uma senha cryptografada para salvar no lugar da senha
        const newSenha = bcrypt.hashSync(senha, 10)

        const newUsuario = await Usuarios.create({
            nome,
            email,
            senha: newSenha // ai receber a senha cryptografada
        })

        return res.status(201).json(newUsuario)
    } 
}

//  exportando o objeto 
module.exports = usuariosControler
// Aqui vamos fazer a validação dos dados do usuario

// precisamos importar express-validation
const {validate, Joi} = require("express-validation")

module.exports = validate({
    body: Joi.object({ // vai montar um objeto de validação para o body receber

        // precisamos dos    campo para o usuario digitar e ele vai ter uma validação obrigatorias
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(8).required()
    })
})
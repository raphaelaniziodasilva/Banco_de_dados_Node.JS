// importar express-validation
const {validate, Joi} = require("express-validation")

module.exports = validate({
    
    body: Joi.object({ // vai montar um objeto de validação para o body receber

        email: Joi.string().email().required(),
        senha: Joi.string().required()
    })
})
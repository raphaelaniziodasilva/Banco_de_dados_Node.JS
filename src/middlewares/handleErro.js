// importando express-validation
const { ValidationError } = require("express-validation")

// exportando a função, aqui só vai cair qualquer coisa de erro
module.exports = (error, req, res, next) => {

        // vamos fazer uma validação para saber o tipo de erro
    if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error)

        // caso esse erro não seja do tipo validation erro, vai ser um erro generico
        return res.status(500).json(error) 
    }
}


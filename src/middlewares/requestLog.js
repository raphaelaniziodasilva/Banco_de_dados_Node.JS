// Os Middlewares são funções do JavaScript mesmo então podemos criar as funções em JS 

// Os Middlewares servem para muitas coisas como por exemplo, fazer logs, para fazer uploads de arquivos, para poder fazer validação se foi enviada alguma informação ou não

// Vamos fazer um Middleware global para dizer qual rota esta sendo acesada pelo ip 

module.exports = (req, res, next) => {
    console.log(` O Ip: ${req.ip} acessou a rota: ${req.originalUrl} `)

    // next vai deixar o fluxo seguir
    next()
}
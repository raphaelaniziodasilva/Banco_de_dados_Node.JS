// Aqui dentro desta database eu vou criar todo o processo de conexão, porque eu preciso fazer a conexão com o meu banco de dados 

// primeiro: eu vou importar o Sequelize
const Sequelize = require("sequelize");

// Pegando os dados para fazer a comunicação com o banco de dados

const DB_NAME = "loja"; 
const DB_USER = "root"; 
const DB_PASS = "Vaizards1$"; 
const DB_CONFIG = { 
    dialect: "mysql", 
    host: "localhost", 
    port: 3306 
};

// fazer uma conexão para acessar o nosso banco de dados 

let db = {}; 

// tratando o erro
try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Error ao tentar uma conexão com banco de dados")
}

// testar para ver se conseguimos nos conectar corretamente

async function hasConection(){
    // tratando o erro
    try {
        await db.authenticate();
        console.log("Banco de dados conectado!")
    } catch (erro) {
        // se der errado
        console.error("Erro se conectando com o banco de dados")
    }
}

// exporta a função hasConection estrutura para adicionar o objeto db

Object.assign(db, {
    hasConection,
});

// export esse banco de dados db
module.exports = db;


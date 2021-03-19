const db = require("../_database")
const Sequelize = require('sequelize')

const Company = db.define('company', {
    id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    cnpj: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    segmento: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    cep: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    rua: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    complemento: {
        type: Sequelize.STRING(100),
    },
    cidade: {
        type: Sequelize.STRING(20),
    },
    estado: {
        type: Sequelize.STRING(2)
    }
});


//Company.sync({force:true})

module.exports = Company;


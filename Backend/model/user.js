const db = require("../_database")
const Sequelize = require('sequelize')
const Company = require('./company')

const User = db.define('users', {
    matricula: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: {
            args: true,
            msg: 'Esse email já está cadastrado!'
        },
        validate: {
          isEmail: {
            msg: 'Não é um email'
          }
        }
    },
    telefone: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    dataNasc: {
        type: Sequelize.DATE,
        allowNull: false
    },
    funcao: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    dataAdmissao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        defaultValue: "123456"
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

Company.hasMany(User,  {foreingKey:  {name: 'companyId', allowNull: false}, onDelete: 'CASCADE'})
User.belongsTo(Company);
//User.sync({force:true})

module.exports = User;
const Sequelize = require('sequelize')
const database = new Sequelize('postgres://wlejpoxh:quEgrFcL1oJ5AStc4jKVOVn795dItFzu@motty.db.elephantsql.com:5432/wlejpoxh')

database.authenticate().then(() => {
    console.log('Conectado ao banco de dados')
}).catch(err => {
    console.error('Houve um erro ao tentar conectar no banco de dados: ', err);
});
module.exports = database
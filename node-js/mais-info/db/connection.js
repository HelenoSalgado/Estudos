const { Sequelize}  = require('sequelize');

const sequelize = new Sequelize('bio', 'root', 'santidade3', {
  host: 'localhost',
  dialect: 'mysql' 
});

// try {
//   sequelize.authenticate();
//   console.log('Conectou ao banco com sucesso.');
// } catch (error) {
//   console.log('Não foi possível conectar ao banco, ' + error)
// }

module.exports = sequelize;
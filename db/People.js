const conn = require('./db');

const People = conn.define('people',{
  name: {
    type: conn.Sequelize.STRING
  },
  age: {
    type: conn.Sequelize.INTEGER
  }
})

module.exports = People;

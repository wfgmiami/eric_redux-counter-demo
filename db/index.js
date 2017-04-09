const conn = require('./db');

const People = require('./People');

const sync = () =>{
  return conn.sync({ force: true })
}

const names = ['alex', 'tom','matt'];

const seed = () =>{
  return sync()
    .then( () => Promise.all(names.map(name => People.create({ name }))))
}

module.exports = {
  seed,
  models: {
    People
  }
}

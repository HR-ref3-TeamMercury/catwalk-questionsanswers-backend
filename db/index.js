const knex = require('knex');
const knexfile = require('./knexfile');

const db = knex(knexfile.development);
module.exports = db;

module.exports = knex({
  client: 'postgres',
  connection: {
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'password',
    database: 'postgres',
  },
});

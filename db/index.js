const pg = require('pg');

const cs = 'postgres://postgres:password@localhost:5432/questions_answers';

const client = new pg.Client(cs);

client.connect();

module.exports = client;

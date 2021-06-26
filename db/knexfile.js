// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: '5432',
      database: 'questions_answers',
      user: 'postgres',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      // tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: 'seeds/',
    },
    useNullAsDefault: true,
  },
  pool: {
    min: 2,
    max: 10,
  },
};

const config = require('config');

const remoteDB = {
  client: 'postgresql',
  connection: {
    database: 'thesis_devel',
    user: 'postgres',
    password: 'postgres',
    host: process.env.DB,
    port: 5432
  },
  pool: {
    min: 1,
    max: 2
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'db/migrations'
  },
  seeds: {
    directory: 'db/seeds'
  }
};

module.exports = process.env.DB ? remoteDB : config.knex;

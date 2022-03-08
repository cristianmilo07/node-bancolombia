const { Client } = require('pg');
const { config } = require('./../config/config');

async function getConnection() {
  const client = new Client({
    USER: encodeURIComponent(config.dbUser),
    PASSWORD: encodeURIComponent(config.dbPassword),
    URI: `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
  });
  await client.connect();
  return client;
}

module.exports = getConnection;




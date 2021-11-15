const { Client } = require('pg');

async function getDBConnection() {

    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'admin',
        password: 'admin123',
        database: 'my_store'
    });

    await client.connect();
    return client;
}

module.exports = getDBConnection;

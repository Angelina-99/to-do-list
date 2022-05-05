const { ClientConfig } = require('pg');

module.exports = {
    //Настройка базы данных
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '5432',
        user: process.env.DB_USER || 'selectel',
        password: process.env.DB_PASSWORD || 'selectel',
        database: process.env.DB_NAME || 'selectel',
    }
}
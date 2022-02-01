const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'jorgepoma10',
    host: 'localhost',
    port: '5433',
    database:'mm'
});

module.exports = pool;
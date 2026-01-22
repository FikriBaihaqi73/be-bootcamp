require('dotenv').config();
const { Client } = require('pg');

// Menggunakan connection string dari environment variable
const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

client.connect()
    .then(() => console.log('Terhubung ke Database (Neon)!'))
    .catch(err => console.error('Gagal konek ke database:', err));

module.exports = client;

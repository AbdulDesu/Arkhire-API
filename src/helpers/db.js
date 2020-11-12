const mysql = require('mysql')
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) => {
    if(!err)
    console.log('Nice, Database Connected');
    else
    console.log('Bad, Connection Failed \n' + JSON.stringify(err,undefined,2));
});

module.exports = connection
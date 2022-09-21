const express = require('express');
const app = express();
const port = 3001;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `insert into people(name) values('Sunda')`;

connection.query(sql);
connection.end();

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle</h1>');
});

app.listen(port, () => {
    console.log('Runing at ('+port+')');
});
//Módulo de conexões à bancos MYSQL
const mysql = require('mysql');

//Objeto de conexão (DAO)
const connection = mysql.createConnection({
	host:'banco-dsrpt21.bancomock.com',
	port: 3306,
	user: 'admin',
	password:'dsrpt21',
	database:'api_container'
});

module.exports = connection;
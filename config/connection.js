'use strict';

(function(){
	var mysql = require('mysql');

	if (process.env.JAWSDB_URL) {
		connection = mysql.createConnection(process.env.JAWSDB_URL);
	} else {
		var connection = mysql.createConnection({
		host: "localhost",
		user: "username",
		password: "password",
		database: "bootcamp_db"
	});
	}

	connection.connect()
	module.exports = connection;
})();
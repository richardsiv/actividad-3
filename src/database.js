const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'computerd'
});

mysqlConnection.connect(function (err){
    if (err){
        console.log(err);
        return;
    }else{
        console.log('DB is CONNECTED');
    }
});

module.exports = mysqlConnection;
var mysql = require('mysql');

var connMySQL = function(){ /*oculta a conexão com o BD*/
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        database : 'portal_noticias'
    });
}

module.exports = function (){
    return connMySQL;
}    
var mysql = require('mysql');

var connMySQL = function(){ /*oculta a conexão com o BD*/
    console.log('Conexão estabelecida com o DB')
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        database : 'portal_noticias'
    });
}

module.exports = function (){
    console.log('O reload conectou-se ao BD')
    return connMySQL;
}    
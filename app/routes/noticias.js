module.exports = function (app) {
    app.get('/noticias', function (req, res) {

    var mysql = require('mysql');

    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '12345',
        database : 'portal_noticias'
    });

    connection.query('select * from Noticias', function(error, result){
            res.send(result);
        });
    
        //res.render("noticias/noticias")
    });
}
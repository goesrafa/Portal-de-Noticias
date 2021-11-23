var http = require('http');

var server = http.createServer(function(req, res){

    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Tecnologias mais recentes</body></html>");
    }else if (categoria == '/moda'){
        res.end("<html><body>O que esta em alta na moda?</body></html>");
    }else if (categoria == '/futebol'){
        res.end("<html><body>Noticias quentes sobre futebol</body></html>")
    } else {
        res.end("<html><body>Portal de noticias</body></html>")
    }   

});

server.listen(3000)
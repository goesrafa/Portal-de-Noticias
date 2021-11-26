var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*tras os dados contidos nas rotas ou qualquer outra parte do projeto, 
deixando assim o código mais limpo
*/
consign()
.include('app/routes')
.then('/config/dbConnection.js')/*sempre apontar o módulo*/
.then('app/models')
.into(app)

module.exports = app;
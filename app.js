var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);
rotaNoticias;

var rotaHome = require('./app/routes/home')(app);
rotaHome;

var rotaForm = require('./app/routes/formulario_inclusao_noticias')(app);
rotaForm;


app.listen(3000, function () {
    console.log('Servidor online');
})
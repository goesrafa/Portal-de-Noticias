module.exports.formulario_inclusao_noticias = function(app, req, res){
    res.render("admin/form_add_noticia", {validacao:{}, noticia : {}})   

}

module.exports.noticias_salvar = function (app, req, res){
    var noticia = req.body;

    req.assert('titulo', 'Título obrigatório').notEmpty();
    req.assert('resumo', 'Resumo obrigatório').notEmpty();
    req.assert('resumo', 'No resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('autor', 'Autor obrigatório').notEmpty();
    req.assert('data_noticia', 'A data é obrigatoria').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia', 'Noticia obrigatória').notEmpty();

    var erros = req.validationErrors();
    console.log(erros)

    if(erros){
        res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
    }
     
    var connection = app.config.dbConnection();
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

    NoticiasDAO.salvarNoticia(noticia, function (error, result) {
        res.redirect('/noticias');
    });
}
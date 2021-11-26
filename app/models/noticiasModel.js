module.exports = function(){

    this.getNoticias = function(connection, callback){
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = function(connection, callback){
        connection.query('select * from Noticias where  id_noticia = 2', callback)
    }

    this.salvarNoticia = function(noticia, connection, callback){
        connection.query('insert into Noticias set ?', noticia, callback)

    }

    return this
}
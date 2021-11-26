create table Noticias (
	id_noticia int not null primary key auto_increment,
    titulo varchar (100),
    data_criacao timestamp default current_timestamp,
    noticia text
);


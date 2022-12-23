create table comentario (

    id serial primary key,
    nome character varying(100),
    conteudo text,
    data_pub date,
    email character varying(100)

)
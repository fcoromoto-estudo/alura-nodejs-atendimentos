USE atendimentos;

CREATE TABLE IF NOT EXISTS Atendimentos (
                          id MEDIUMINT NOT NULL AUTO_INCREMENT,
                          cliente CHAR(30) NOT NULL,
                          pet varchar(20),
                          servico varchar(20) NOT NULL,
                          status varchar(20) NOT NULL,
                          observacoes text,
                          data DATETIME NOT NULL ,
                          dataCriacao DATETIME NOT NULL,
                         PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Pets (
                          id MEDIUMINT NOT NULL AUTO_INCREMENT,
                          nome CHAR(50) NOT NULL,
                          imagem varchar(100) NOT NULL,
                          PRIMARY KEY (id)
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;


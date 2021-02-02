class Tabelas {

    init(conexao) {
        this.conexao = conexao
        this.criarAtendimento()
    }

    criarAtendimento() {
        const sql = `
         CREATE TABLE IF NOT EXISTS Atendimentos (
                          id MEDIUMINT NOT NULL AUTO_INCREMENT,
                          cliente CHAR(30) NOT NULL,
                          pet varchar(20),
                          servico varchar(20) NOT NULL,
                          status varchar(20) NOT NULL,
                          observacoes text,
                          data DATETIME NOT NULL ,
                          dataCriacao DATETIME NOT NULL,
                          PRIMARY KEY (id))
        `;

        this.conexao.query(sql);
    }
}

module.exports = new Tabelas

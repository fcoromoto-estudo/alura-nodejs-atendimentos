const query = require('../infra/database/queries')


class Atendimento {

    adiciona(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ? '
        return query(sql, atendimento)
    }

    lista(){
        const sql = 'SELECT * FROM Atendimentos '
        return query(sql)
    }

    buscarPorId(id){
        const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`
        return query(sql)
            .then(atendimentos => {
                if(atendimentos.length === 0){
                    throw `Atendimento ${id} não encontrado na base`
                }else{
                    return atendimentos[0];
                }
            })
    }

    altera(id, valores){
        const sql = `UPDATE Atendimentos SET ? WHERE id = ?`
        return query(sql, [valores, id])
    }

    deleta(id){
        const sql = `DELETE FROM Atendimentos WHERE id = ${id}`
        return query(sql)
            .then(value => {
                if(value.affectedRows === 0) {
                    throw `Atendimento ${id} não encontrado na base`
                }
            })
    }

}

module.exports = new Atendimento()

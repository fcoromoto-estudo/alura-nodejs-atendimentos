const moment = require('moment')
const conexao = require('../infra/conexao')

class Atendimento {

    adiciona(atendimento, resp) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao, data}

        const query = 'INSERT INTO Atendimentos SET ? ';

        conexao.query(query, atendimentoDatado, (error, result) => {

            if(error){
                resp.status(400).json(error);

            } else {
                resp.status(201).json(result);
            }
        })
    }
}

module.exports = new Atendimento()

const moment = require('moment')
const conexao = require('../infra/conexao')

class Atendimento {

    adiciona(atendimento, resp) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        const atendimentoDatado = {...atendimento, dataCriacao, data}

        const validacoes = [
            validarData(data, dataCriacao),
            validarCliente(atendimento.cliente)
        ].filter(validacao => !validacao.valido);

        if(validacoes.length > 0){
            resp.status(400).json(validacoes)
        }else {
            const query = 'INSERT INTO Atendimentos SET ? '

            conexao.query(query, atendimentoDatado, (error, result) => {

                if(error){
                    resp.status(400).json(error)
                } else {
                    resp.status(201).json(result)
                }
            })
        }
    }

    lista(resp){
        const query = 'SELECT * FROM Atendimentos '

        conexao.query(query, (error, result) => {

            if(error){
                resp.status(400).json(error)
            } else {
                resp.status(200).json(result)
            }
        })
    }

    buscarPorId(id, resp){
        const query = `SELECT * FROM Atendimentos WHERE id = ${id}`

        conexao.query(query, (error, result) => {

            if(result.length === 0 ){
                resp.status(404).send(`Atendimento ${id} não encontrado`)
            }
            else if(error){
                resp.status(400).json(error)
            } else {
                const atendimento = result[0];
                resp.status(200).json(atendimento)
            }
        })
    }

    altera(id, valores, resp){

        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        }

        const query = `UPDATE Atendimentos SET ? WHERE id = ?`

        conexao.query(query, [valores, id], (error,result) => {

            if(error){
                resp.status(400).json(error)
            } else {
                resp.status(200).json(result)
            }
        })
    }

    deleta(id, resp){

        const query = `DELETE FROM Atendimentos WHERE id = ?`

        conexao.query(query, id, (error,result) => {

            if(error){
                resp.status(400).json(error)
            } else {
                resp.status(200).json(result)
            }
        })
    }
}

const validarData = (data, dataCriacao) => {
    const validacao = {
        nome : 'data',
        valido : true,
        messagem : null
    }

    if(moment(data).isBefore(dataCriacao)){
        validacao.valido = false;
        validacao.messagem = 'Data deve ser maior ou igual data atual '
    }

    return validacao;
}

const validarCliente = (cliente) => {
    const validacao = {
        nome : 'cliente',
        valido : true,
        messagem : null
    }

    if(cliente.length < 5){
        validacao.valido = false;
        validacao.messagem = 'Cliente deve ter no mínimo 5 caracteres '
    }

    return validacao;
}

module.exports = new Atendimento()

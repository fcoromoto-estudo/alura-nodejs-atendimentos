const moment = require('moment')
const conexao = require('../infra/conexao')
const uploadArquivo = require('../arquivos/upload')

class Pet {

    adiciona(pet, resp) {
        const nomeArquivo = pet.nome;
        const caminho = pet.imagem;
        uploadArquivo(caminho, nomeArquivo, (errorUpload, novoNome) => {
            if(errorUpload){
                resp.status(400).json(errorUpload)
            }else {
                const novoPet = { nome : pet.nome, imagem : novoNome};

                const query = 'INSERT INTO Pets SET ? '

                conexao.query(query, novoPet, (errorDb, result) => {

                    if(errorDb){
                        resp.status(400).json(errorDb)
                    } else {
                        resp.status(201).json(novoPet)
                    }
                })
            }

        })

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

module.exports = new Pet()

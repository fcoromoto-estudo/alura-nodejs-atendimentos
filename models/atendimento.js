const moment = require('moment')
const repository = require('../repositories/atendimento')
const repositoryCliente = require('../repositories/cliente')

class Atendimento {

    adiciona(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        const atendimentoDatado = {...atendimento, dataCriacao, data}


        const validacoes = [
            validarData(data, dataCriacao),
            validarCliente(atendimento.cliente)
        ].filter(validacao => !validacao.valido);

        if(validacoes.length > 0){
            return new Promise((resolve, reject) => reject(validacoes))
        }else {
           return repository.adiciona(atendimentoDatado)
               .then(value => {
                   return {id : value.insertId, ...atendimentoDatado}
               })
        }
    }

    lista(){
       return repository.lista()
    }

    buscarPorId(id){
        return repository.buscarPorId(id)
            .then(async atendimento => {

                const cpf = atendimento.cliente;
                const { data } = await repositoryCliente.buscarPorCPF(cpf)
                atendimento.cliente = data

                return atendimento
            })
    }

    altera(id, valores){

        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        }

        return repository.altera(id, valores)
            .then(() => {
                return {id, ... valores}
            })
    }

    deleta(id){
        return repository.deleta(id)
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

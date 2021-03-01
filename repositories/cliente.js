const axios = require('axios')


class Cliente {

    buscarPorCPF(cpf){
        const clientesPath = `http://${process.env.CLIENTES_API_HOST}:${process.env.CLIENTES_API_PORT}/${cpf}`
        return axios.get(clientesPath)
    }

}

module.exports = new Cliente()

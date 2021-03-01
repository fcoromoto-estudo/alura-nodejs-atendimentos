const Atendimento = require('../models/atendimento')

module.exports = app => {

    app.get('/atendimentos', (req, resp) =>{
        Atendimento.lista()
            .then(atendimentos=> resp.json(atendimentos))
            .catch(error => resp.status(400).json(error))
    })

    app.get('/atendimentos/:id', (req, resp) =>{
        const id = parseInt(req.params.id)
        Atendimento.buscarPorId(id)
            .then(atendimento => {
                if(atendimento){
                    resp.json(atendimento)
                }else{
                    resp.status(404).send(`Atendimento ${id} não encontrado`)
                }
            })
            .catch(error => resp.status(400).json(error))
    })

    app.post('/atendimentos', (req, resp) =>{

        const atendimento = req.body;

        Atendimento.adiciona(atendimento)
            .then(atendimentoCriado => resp.status(201).json(atendimentoCriado))
            .catch(error => resp.status(400).json(error))
    })

    app.patch('/atendimentos/:id', (req, resp) =>{
        const id = parseInt(req.params.id)
        const valores = req.body;

        Atendimento.altera(id, valores)
            .then(atendimento => resp.json(atendimento))
            .catch(error => resp.status(400).json(error))
    })

    app.delete('/atendimentos/:id', (req, resp) =>{
        const id = parseInt(req.params.id)
        Atendimento.deleta(id,resp)
            .then(() => resp.status(200).send(`Atendimento ${id} removido`))
            .catch(error => resp.status(400).json(error))
    })
}

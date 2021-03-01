const Pets = require('../models/pet')

module.exports = app => {

    const basePath = '/pets';

    app.get(basePath, (req, resp) =>{
        Pets.lista(resp);
    })

    app.get(`${basePath}/:id`, (req, resp) =>{
        const id = parseInt(req.params.id)
        Pets.buscarPorId(id, resp);
    })

    app.post(basePath, (req, resp) =>{
        const pet = req.body;
        Pets.adiciona(pet, resp);
    })

    app.patch(`${basePath}/:id`, (req, resp) =>{
        const id = parseInt(req.params.id)
        const valores = req.body;
        Pets.altera(id, valores, resp);
    })

    app.delete(`${basePath}/:id`, (req, resp) =>{
        const id = parseInt(req.params.id)
        Pets.deleta(id,resp);
    })
}

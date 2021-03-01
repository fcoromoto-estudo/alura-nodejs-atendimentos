const Pets = require('../models/pet')

module.exports = app => {

    const basePath = '/pets';

    app.post(basePath, (req, resp) =>{
        const pet = req.body;
        Pets.adiciona(pet)
            .then(petCriado => resp.status(201).json(petCriado))
            .catch(error => resp.status(400).json(error))
    })


}

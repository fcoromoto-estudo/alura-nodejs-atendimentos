
module.exports = app => {
    app.get('/atendimentos', (req, resp) => resp.send('Você está na rota de atendimentos utilizando GET.'))

    app.post('/atendimentos', (req, resp) =>{

        resp.send('Você está na rota de atendimentos utilizando POST.');
    })
}

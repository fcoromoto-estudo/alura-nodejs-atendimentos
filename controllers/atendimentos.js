
module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos utilizando GET.'))

    app.post('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos utilizando POST.'))
}

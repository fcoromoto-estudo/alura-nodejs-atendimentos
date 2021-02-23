const customExpress = require('./config/customExpress');
const conexao = require('./infra/conexao');

conexao.connect(erro => {
    if(erro) {
        console.error(`${new Date()}`, erro)
    } else {

        console.log(`${new Date()} : conectado com sucesso`)

        const port = process.env.API_PORT;
        const app = customExpress()

        app.listen(port, () => console.log(`${new Date()} : servidor rodando na porta ${port}`))
    }
})


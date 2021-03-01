const repository = require('../repositories/pet')
const uploadArquivo = require('../infra/arquivos/upload')

class Pet {

    adiciona(pet) {
        const nomeArquivo = pet.nome;
        const caminho = pet.imagem;

        return new Promise(((resolve, reject) => {
            uploadArquivo(caminho, nomeArquivo, (errorUpload, novoNome) => {

                if(errorUpload){

                    reject(errorUpload)

                }else {
                    const novoPet = { nome : pet.nome, imagem : novoNome};

                    repository.adiciona(novoPet)
                        .then(value => {
                            resolve( {id: value.insertId, ...novoPet})
                        })
                        .catch(error => reject(error))
                }
            })
        }))
    }
}

module.exports = new Pet()

const fs = require('fs')
const path = require('path')


/** Leitura e escrita de arquivos de forma SINCRONA

fs.readFile('./assets/salsicha.jpg', (error, buffer) => {
    console.log('imagem lida');
    console.log(buffer);
    fs.writeFile('./assets/salsicha2.jpg', buffer, error => {
            console.log('imagem salsicha2 criada');
    })
})
#######################################################################
 **/

/** Leitura e escrita de arquivos de forma ASINCRONA **/
// fs.createReadStream('./assets/salsicha.jpg')
//     .pipe(fs.createWriteStream('./assets/salsicha-stream2.jpg'))
//     .on('finish', () => console.log('Escrita de arquivo finalizada'))


module.exports = (caminho, nomeArquivo, callbackImagemCriada) => {
    const tiposValidos = ['jpg','jpeg','png']
    const tipo = path.extname(caminho)
    const ehTipoValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

    if(ehTipoValido){
        const novoNome = `./assets/imagem/${nomeArquivo}${tipo}`

        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoNome))
            .on('finish', () => callbackImagemCriada(null,novoNome))
    } else {
        const error = {descricao: `Error tipo inválido ${tipo}`};
        callbackImagemCriada(error, null)
    }
}

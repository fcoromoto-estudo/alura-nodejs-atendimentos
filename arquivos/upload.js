const fs = require('fs')


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
fs.createReadStream('./assets/salsicha.jpg')
    .pipe(fs.createWriteStream('./assets/salsicha-stream.jpg'))
    .on('finish', () => console.log('Escrita de arquivo finalizada'))

let { readFile, writeFile } = require('fs');

const ler = (caminho, unicode) => {
    
    readFile(caminho, unicode, (error, texto) => {
    if (error) {

        throw error;
        
    } else {

        console.log(texto);
        return texto

    }

})

};

const escrever = (caminho, msg) => {
    
    writeFile(caminho, msg, (error) => {
    if (error) {

        throw error;
        
    } else {

        console.log("Escrito com sucesso");

    }

})

};

module.exports = { ler, escrever }

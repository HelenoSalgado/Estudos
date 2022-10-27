const { escrever, ler } = require("./models/arquivos/ManipulaArquivo");

// Ler e escrever arquivo no diretório

ler("teste.txt", "utf-8")

escrever("teste.txt", "Olá mundo: Teste NodeJs");

// Conectar banco de dados

(async () => {
    const db = require('./models/db/ConnectDB');
 
    const clientes = await db.selectCustomers();
    console.log(clientes);

})();




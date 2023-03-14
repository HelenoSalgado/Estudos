async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:santidade3@localhost:3306/loja");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

connect()

async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM PRODUTO;');
    return rows;
  }
  
module.exports = {selectCustomers}

async function insertCustomer(customer){
    const conn = await connect();
    const sql = 'INSERT INTO PRODUTO(nome,descricao) VALUES (?,?);';
    const values = [customer.nome, customer.descricao];
    return await conn.query(sql, values);
};

module.exports = {insertCustomer}

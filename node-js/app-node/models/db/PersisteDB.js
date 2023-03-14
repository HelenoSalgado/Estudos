const db = require('./models/db/ConnectDB');


    async(customer) => {
        const conn = await connect();
        const sql = 'INSERT INTO clientes(nome,idade,uf) VALUES (?,?);';
        const values = [customer.nome, customer.descricao];
        this.values = values;
        return await conn.query(sql, values);
    };



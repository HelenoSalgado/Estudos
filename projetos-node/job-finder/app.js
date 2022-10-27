const express = require('express');
const app = express();
const db = require('./db/connection');
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`O express está rodando na porta ${PORT}`);
})

// DB connection

db.authenticate()
  .then(() => {
    console.log("Conectou com sucesso");
  })
  .catch(err => {
    console.log("Erro ao conectar ", err)
  });

app.get('/', (req, res) => {
  res.send(`Esta funcionando 1.`)
})
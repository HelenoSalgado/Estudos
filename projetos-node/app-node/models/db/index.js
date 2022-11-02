var mysql = require('mysql');

var dados = {
    nome: "Notebook",
    descricao: "Notebook ideal"
};

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "santidade3",
  database: "loja"
});

// con.connect(function(err) {
//   if (err) throw err;
  
//   const sql = 'INSERT INTO PRODUTO(nome,descricao) VALUES (?,?);';
//   const values = [dados.nome, dados.descricao];

//     con.query(sql, values, function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);

//     });

// });

// Delete 

con.connect(function(err) {

  if (err) throw err;
  for (let index = 0; index < 40; index++) {

    setTimeout(() => {

      var sql = "DELETE FROM PRODUTO WHERE id =" + index;

      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    
      });

    }, 500);
    
    
  }
  //var sql = "DELETE FROM PRODUTO WHERE id = '33'";

  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records deleted: " + result.affectedRows);

  // });

});
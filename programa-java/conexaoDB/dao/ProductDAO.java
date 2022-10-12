package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import model.Product;

public class ProductDAO {

  private Connection connection;

  public ProductDAO(Connection con) {

    this.connection = con;

  }

  public void save(Product product) throws SQLException{
    
    String sql = "INSERT INTO PRODUTO (NOME, DESCRICAO) VALUES (?,?)";

    try (PreparedStatement stm = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

      stm.setString(1, product.getNome());
      stm.setString(2, product.getDescricao());

      stm.execute();

      //connection.commit();

      try (ResultSet resultado = stm.getGeneratedKeys()) { 

        while(resultado.next()){
        product.setId(resultado.getInt(1));

        }

      }

      System.out.println(product);
  
    }

  }
  
}

package contabank.conexaoDB;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexaoDB {
  
  public static void main(String[] args) throws SQLException {
    
    Connection conexao = DriverManager.getConnection(
      "jdbc:mysql://localhost/bio");
    System.out.println("Conectado!");
    conexao.close();
}

}

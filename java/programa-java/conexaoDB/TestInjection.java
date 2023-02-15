import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class TestInjection {

  public static void main(String[] args) throws SQLException{
    
    Connection con = new ConnectionFactory().getConnection();
    con.setAutoCommit(false);

    try {

      PreparedStatement stm = con.prepareStatement("INSERT INTO PRODUTO (NOME, DESCRICAO) VALUES (?,?)", Statement.RETURN_GENERATED_KEYS);

      addProduct("Relógio", "Relógio prata de alto designer.", stm);
      addProduct("Fone de Ouvido", "Fone sem fio.", stm);

      con.commit();

      stm.close();
      
    } catch (Exception e) {

      e.printStackTrace();
      System.out.println("Rollback Executado");
      con.rollback();
      
    }

    con.close();

  
  }

  private static void addProduct(String nome, String descricao, PreparedStatement stm) throws SQLException{

    stm.setString(1, nome);
    stm.setString(2, descricao);

    //if (nome.equals("Relógio")) {

      //throw new RuntimeException("Erro inesperado.");
      
    //}

    stm.execute();

    ResultSet resultado = stm.getGeneratedKeys();

    System.out.println(resultado);

  }
}


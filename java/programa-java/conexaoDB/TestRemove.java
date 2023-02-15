import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class TestRemove {

  public static void main(String[] args) throws SQLException {

    Connection con = new ConnectionFactory().getConnection();

    PreparedStatement stm = con.prepareStatement("DELETE FROM PRODUTO WHERE ID > 2");

    stm.execute();

    Integer resultado = stm.getUpdateCount();

    System.out.println(resultado);

    con.close();
    
  }
  
}

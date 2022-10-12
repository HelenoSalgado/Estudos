import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ConexaoDB {

  public static void main(String[] args) throws SQLException {

    Connection con = new ConnectionFactory().getConnection();

    PreparedStatement stm = con.prepareStatement("SELECT ID, NOME, DESCRICAO FROM PRODUTO");

    stm.execute();

    ResultSet resultado = stm.getResultSet();

    System.out.println(resultado);

    while (resultado.next()) {
  
        System.out.println(resultado.getInt("ID"));
        System.out.println(resultado.getString("NOME"));
        System.out.println(resultado.getString("DESCRICAO"));
        
    }

    //System.out.println(con.getCatalog());
    con.close();

    
    
}

}
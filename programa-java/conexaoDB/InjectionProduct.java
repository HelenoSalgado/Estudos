import java.sql.Connection;
import java.sql.SQLException;

import dao.ProductDAO;
import model.Product;

public class InjectionProduct {

  public static void main(String[] args) throws SQLException{

    Product comoda = new Product("Cômoda", "Cômoda grande vertical");
    
    try (Connection con = new ConnectionFactory().getConnection()) {

      ProductDAO productDAO = new ProductDAO(con);
      productDAO.save(comoda);
      
    }

  }
  
}

import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;

import com.mchange.v2.c3p0.ComboPooledDataSource;

public class ConnectionFactory {

  DataSource dataSource;

  public ConnectionFactory() {

    ComboPooledDataSource comboPool = new ComboPooledDataSource();

    comboPool.setJdbcUrl("jdbc:mysql://localhost/loja");
    comboPool.setUser("heleno");
    comboPool.setPassword("santidade3");

    comboPool.setMaxPoolSize(15);

    this.dataSource = comboPool;

  }

  public Connection getConnection() throws SQLException{

    return this.dataSource.getConnection();

  }
  
}

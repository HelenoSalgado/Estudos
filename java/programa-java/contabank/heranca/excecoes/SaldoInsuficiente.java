package contabank.heranca.excecoes;

public class SaldoInsuficiente extends RuntimeException {

  public SaldoInsuficiente(String msg) {
    super(msg);
  }
  
}

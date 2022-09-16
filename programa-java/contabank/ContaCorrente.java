package contabank;

public class ContaCorrente extends Conta {

  // Os construtores não são herdados pela class filha, mas podemos reaproveitar o da class mãe com o seguinte código.
  
  public ContaCorrente(int agencia, int numero){

    super(agencia, numero);

  }

  
}

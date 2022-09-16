package contabank;

public class ContaPoupanca extends Conta{

   // Os construtores não são herdados pela class filha, mas podemos reaproveitar o da class mãe com o seguinte código.
  
   public ContaPoupanca(int agencia, int numero){

    super(agencia, numero);

  }

  @Override
  public boolean saca(double valor) {
    
    double valorSacado = valor + 0.20;
    return super.saca(valorSacado);
    
  }
  
}

package contabank.contas;

import contabank.modelos.Conta;

public class ContaPoupanca extends Conta{

   // Os construtores não são herdados pela class filha, mas podemos reaproveitar o da class mãe com o seguinte código.
  
   public ContaPoupanca(int agencia, int numero){

    super(agencia, numero);

  }

  @Override
  public void saca(double valor) {
    
    double valorSacado = valor + 0.20;
    super.saca(valorSacado);
    
  }
  
}

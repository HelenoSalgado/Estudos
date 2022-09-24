package contabank;

public class TestaMetodos {

  public static void main(String[] args) {
    
    Conta contaDoPaulo = new ContaCorrente(10100, 112030449);
    Conta contaDaMarcia = new ContaPoupanca(10100, 112030449);

    contaDoPaulo.deposita(100);

    contaDoPaulo.saca(20);

    contaDoPaulo.transfere(50, contaDaMarcia);

    System.out.println("Transferência realizada com sucesso");

  

      //System.out.println("Valor insuficiente.");
      



    System.out.println(contaDoPaulo.getSaldo());
    System.out.println(contaDaMarcia.getSaldo());
 

  }
  
}

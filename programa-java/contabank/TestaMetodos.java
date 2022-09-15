package contabank;

public class TestaMetodos {

  public static void main(String[] args) {
    
    Conta contaDoPaulo = new Conta();
    Conta contaDaMarcia = new Conta();

    contaDoPaulo.deposita(100);

    contaDoPaulo.saca(20);

    if (contaDoPaulo.transfere(50, contaDaMarcia)) {

      System.out.println("Transferência realizada com sucesso");

    } else {

      System.out.println("Valor insuficiente.");
      
    }


    System.out.println(contaDoPaulo.getSaldo());
    System.out.println(contaDaMarcia.getSaldo());
 

  }
  
}

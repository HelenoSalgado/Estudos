import contabank.contas.ContaCorrente;
import contabank.contas.ContaPoupanca;
import contabank.modelos.Conta;

public class Array {

  public static void main(String[] args) {
    // Arrays tem um tamanho fixo; neste caso 5 casas. É inicializado com zeros.
    int[] idades = new int[5]; 

    idades[0] = 18;
    idades[1] = 20;
    idades[2] = 40;
    idades[3] = 30;
    idades[4] = 60;
    
    int idade1 = idades[3];

    System.out.println(idades.length);
    System.out.println(idade1);

    // Array de referências de objetos | do mais específico para o mais genérico.

    ContaCorrente[] cc = new ContaCorrente[2];

    cc[0] = new ContaCorrente(1111, 333);

    System.out.println(cc[0].getAgencia());

    Conta[] contas = new Conta[2];

    contas[0] = new ContaCorrente(2222, 444);
    contas[1] = new ContaPoupanca(1212, 555);

    ContaCorrente cc1 = (ContaCorrente) contas[0];

    System.out.println(contas[0].getAgencia());
    System.out.println(cc1.getAgencia());


  }
  
}

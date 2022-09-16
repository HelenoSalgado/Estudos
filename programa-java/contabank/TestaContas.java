package contabank;

public class TestaContas {

  public static void main(String[] args) {

    ContaCorrente contaCorrente = new ContaCorrente(404, 1030405060);
    ContaPoupanca contaPoupanca = new ContaPoupanca(10001, 101010101);

    contaCorrente.deposita(100);
    contaCorrente.transfere(50, contaPoupanca);
    contaPoupanca.saca(20);

    System.out.println("Conta Corrente tem " + contaCorrente.getSaldo());
    System.out.println("Conta Poupança tem " + contaPoupanca.getSaldo());

  }

}

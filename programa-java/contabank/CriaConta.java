package contabank;

public class CriaConta {

  public static void main(String[] args) {
    
    Conta contaDoHeleno = new ContaCorrente(10100, 102030449);
    Conta contaDaMaria = new ContaPoupanca(10100, 132030449);
    Cliente heleno = new Cliente();
    Cliente maria = new Cliente();

    // Já que agência e número são valores absolutos neste caso, não usarei o método set para eles.

    // contaDoHeleno.setAgencia(10100);
    // contaDoHeleno.setNumero(10203044-9);

    contaDoHeleno.setTitular(heleno);
    contaDaMaria.setTitular(maria);

    // É possível copiar a referência do objeto para outas variáveis;

    Conta contaDeSeguranca = contaDoHeleno;
    contaDeSeguranca.deposita(2500);

    // Deposito

    contaDoHeleno.deposita(500);
    contaDoHeleno.saca(100);
    contaDoHeleno.transfere(1000, contaDaMaria);

    // Informações do titular

    contaDoHeleno.getTitular().setNome("Heleno Salgado Lopes");
    contaDoHeleno.getTitular().setCPF("111.111.111.11");
    contaDoHeleno.getTitular().setProfissao("Programador");


    System.out.println(contaDoHeleno.getTitular().getNome() + " tem " + contaDoHeleno.getSaldo());
    System.out.println("A conta da Maria tem " + contaDaMaria.getSaldo());
    System.out.println("Agência: " + contaDoHeleno.getAgencia());
    System.out.println("Número: " + contaDoHeleno.getNumero());

    // Total de contas

    System.out.println("O total de contas é " + Conta.getTotal());


  }
  
}

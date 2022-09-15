package contabank;

public class CriaConta {

  public static void main(String[] args) {
    
    Conta contaDoHeleno = new Conta();
    Cliente heleno = new Cliente();

    contaDoHeleno.setAgencia(10100);
    contaDoHeleno.setNumero(10203044-9);
    contaDoHeleno.setTitular(heleno);

    // É possível copiar a referência do objeto para outas variáveis;

    Conta contaDeSeguranca = contaDoHeleno;
    contaDeSeguranca.deposita(50);

    // Deposito

    contaDoHeleno.deposita(50);
    contaDoHeleno.saca(20);

    // Informações do titular

    contaDoHeleno.getTitular().setNome("Heleno Salgado Lopes");
    contaDoHeleno.getTitular().setCPF("111.111.111.11");
    contaDoHeleno.getTitular().setProfissao("Programador");


    System.out.println(contaDoHeleno.getTitular().getNome() + " tem " + contaDoHeleno.getSaldo());
    System.out.println("Agência: " + contaDoHeleno.getAgencia());
    System.out.println("Número: " + contaDoHeleno.getNumero());


  }
  
}

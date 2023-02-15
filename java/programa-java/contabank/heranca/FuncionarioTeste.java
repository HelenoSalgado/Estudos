package contabank.heranca;

public class FuncionarioTeste {

  public static void main(String[] args) {
    
    Funcionario gerenteHeleno = new Gerente();

    gerenteHeleno.setNome("Heleno Salgado Lopes");
    gerenteHeleno.setCpf("555.555.555.55");
    gerenteHeleno.setSalario(3000);

    System.out.println(gerenteHeleno.getSalario());
  }
  
}

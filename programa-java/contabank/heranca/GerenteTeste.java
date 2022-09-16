package contabank.heranca;

public class GerenteTeste {

  public static void main(String[] args) {
    
    Gerente gerenteLucas = new Gerente();

    gerenteLucas.setNome("Lucas Barbosa");
    gerenteLucas.setSenha(2222);
    gerenteLucas.setSalario(5000);

    System.out.println(gerenteLucas.getNome());
    System.out.println(gerenteLucas.bonificacao());
    System.out.println(gerenteLucas.autentica(2222));
    

  }

}

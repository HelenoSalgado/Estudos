package contabank.heranca;

public class GerenteTeste {

  public static void main(String[] args) {
    
    Gerente gerenteLucas = new Gerente();
    //ClientePrivilegiado clientePrivilegiado = new ClientePrivilegiado();
    SistemaInterno sistemaInterno = new SistemaInterno();

    gerenteLucas.setNome("Lucas Barbosa");
    gerenteLucas.setSalario(5000);
    gerenteLucas.setSenha(2232);
    sistemaInterno.autentica(gerenteLucas);

    //clientePrivilegiado.setSenha(2222);
    //sistemaInterno.autentica(clientePrivilegiado);

    System.out.println(gerenteLucas.getNome());
    System.out.println(gerenteLucas.bonificacao());
    System.out.println(gerenteLucas.autentica(2222));
    

  }

}

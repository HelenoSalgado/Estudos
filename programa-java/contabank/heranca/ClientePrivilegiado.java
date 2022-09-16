package contabank.heranca;

// Esse cliente também tem acesso interno ao sistema.
// Já que no JAVA não é possível herdar multiplas class, a class Autenticavel foi tranformada em uma interface.

public class ClientePrivilegiado implements Autenticavel {

  private AutenticacaoMetodos acesso = new AutenticacaoMetodos();

    @Override
    public Boolean autentica(int senha) {
       return this.acesso.autentica(senha);
    }

    @Override
    public void setSenha(int senha) {
      this.acesso.setSenha(senha);
    }
  
}

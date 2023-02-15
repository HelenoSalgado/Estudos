package contabank.heranca;

public class SistemaInterno {

  private int senha = 2222;

    public void setSenha(int senha) {
      this.senha = senha;
    }

    public void autentica(Autenticavel senha) {

      boolean autenticou = senha.autentica(this.senha);

      if(autenticou) {
          System.out.println("Pode entrar no sistema!");
      } else {
          System.out.println("Não pode entrar no sistema!");
      }

    }
  
}

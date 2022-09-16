package contabank.heranca;

public class AutenticacaoMetodos {

  private int senha;

  public Boolean autentica(int senha) {

    if (senha == this.senha) {
      return true;
    } else {
      return false;
    }

  }

  public void setSenha(int senha) {
    this.senha = senha;
  }
  
}

package contabank.heranca;

// Através da palavra chava "extends" é possível fazer com que a class Gerente herde todas as características da class Funcionário.

public class Gerente extends Funcionario {

    private int senha;

    public void setSenha(int senha) {
      this.senha = senha;
    }

    public Boolean autentica(int senha) {

      if (senha == this.senha) {
        return true;
      } else {
        return false;
      }

    }

    public double bonificacao() {
      return super.getSalario() + 1000;
    }
  
}

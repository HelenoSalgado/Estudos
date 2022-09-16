package contabank.heranca;

// Através da palavra chava "extends" é possível fazer com que a class Gerente herde todas as características da class Funcionário. E através da palavra chave "implementes" essa mesma class asina um contrato com a interface Autenticavel.

public class Gerente extends Funcionario implements Autenticavel{

    private AutenticacaoMetodos acesso = new AutenticacaoMetodos();
    
    @Override
    public Boolean autentica(int senha) {
       return this.acesso.autentica(senha);
    }

    @Override
    public void setSenha(int senha) {
      this.acesso.setSenha(senha);
    }

    public double bonificacao() {
      return super.getSalario() + 1000;
    }
  
}

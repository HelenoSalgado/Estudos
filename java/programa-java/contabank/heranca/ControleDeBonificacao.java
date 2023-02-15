package contabank.heranca;

public class ControleDeBonificacao {

  private double soma;

  public void registra(Funcionario f) {
    double boni = f.bonificacao();
    this.soma = this.soma + boni;
}

public double getSoma() {
    return soma;
}

}

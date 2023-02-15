package contabank.heranca;

// Como a class Funcionario é genérica e representa todos os funcionários e nenhum em específico, a palavra chave abstract nos obriga a sermos específicos na construção de objetos. Dessa forma, a class mãe Funcionario não pode ser instanciada diretamente.

public abstract class Funcionario {

  private String nome;
  private String cpf;
  private double salario;

  public abstract double bonificacao();

  public String getNome() {
    return nome;
  }

  public String getCpf() {
    return cpf;
  }

  public double getSalario() {
    return this.salario;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public void setCpf(String cpf) {
    this.cpf = cpf;
  }

  public void setSalario(double salario) {
    this.salario = salario;
  }
  
}

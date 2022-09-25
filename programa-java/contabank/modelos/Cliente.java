package contabank.modelos;

public class Cliente {

  private String nome;
  private String cpf;
  private String profissao;
  

public void setNome(String nome) {

  this.nome = nome;

}

public void setCPF(String cpf) {

  this.cpf = cpf;

}

public void setProfissao(String profissao) {

  this.profissao = profissao;

}

public String getNome() {

  return this.nome;

}

public String getCPF() {

  return this.cpf;

}

public String getProfissao() {

  return this.profissao;

}

}

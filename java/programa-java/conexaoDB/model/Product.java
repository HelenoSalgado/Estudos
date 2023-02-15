package model;

public class Product {

  private Integer id;
  private String nome;
  private String descricao;

  public Product(String nome, String descricao) {
    this.nome = nome;
    this.descricao = descricao;
  }

  public String getNome() {
    return this.nome;
  }

  public String getDescricao() {
    return this.descricao;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String toString() {
    return String.format("O produto criado foi: %d, %s, %s", this.id, this.nome, this.descricao);
  }
  
}

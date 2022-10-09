public class TestaBuscaAlunos {
  
  public static void main(String[] args) {

    Curso javaColecoes = new Curso("Dominando as coleções do Java",
    "Paulo Silveira");
    
      Aluno a1 = new Aluno("Rodrigo Turini", 34672);
      Aluno a2 = new Aluno("Guilherme Silveira", 5617);
      Aluno a3 = new Aluno("Mauricio Aniche", 17645);

      javaColecoes.matricula(a1);
      javaColecoes.matricula(a2);
      javaColecoes.matricula(a3);

      System.out.println("Quem é o aluno com matricula 5617?");
      Aluno aluno = javaColecoes.buscaMatriculado(5217);
      System.out.println("Aluno: " + aluno);
  }

}

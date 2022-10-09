import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Curso {

  private String nome;
  private String instrutor;
  private List<Aula> aulas = new ArrayList<Aula>();
  private int tempoTotal;
  private Set<Aluno> alunos = new HashSet<>();
  private Map<Integer, Aluno> matriculaParaAluno = new HashMap<>();
   
  public Curso(String nome, String instrutor) {

    this.nome = nome;
    this.instrutor = instrutor;

  }

  public String getNome() {
    return nome;
  }

  public String getInstrutor() {
    return instrutor;
  }

  public List<Aula> getAulas() {
    return Collections.unmodifiableList(aulas);
  }

  public void adiciona(Aula aula) {

    this.aulas.add(aula);
    this.tempoTotal += aula.getTempo();

  }

  public int getTempoTotal() {
    return this.tempoTotal;
  }

  public void matricula(Aluno aluno){
    this.alunos.add(aluno);
    this.matriculaParaAluno.put(aluno.getNumeroMatricula(), aluno);
  }

  public Object getAlunos() {
    return this.alunos;
  }

  public boolean estaMatriculado(Aluno aluno) {
    return this.alunos.contains(aluno);
  }

  public Aluno buscaMatriculado(int numero) {
    return this.matriculaParaAluno.get(numero);
  }
  
}

import java.util.ArrayList;
import java.util.Comparator;

public class TestaListaDeAulas {

  public static void main(String[] args) {
    
    Aula a1 = new Aula("Revistando as Arraylist", 20);
    Aula a2 = new Aula("Lista de objetos", 15);
    Aula a3 = new Aula("Relacionamento de listas", 30);

    ArrayList<Aula> aulas = new ArrayList<>();

    aulas.add(a1);
    aulas.add(a2);
    aulas.add(a3);

    // System.out.println(aulas);

    // Organiza pelo tempo em minutos

    aulas.sort(Comparator.comparing(Aula::getTempo));
 
    System.out.println(aulas);

  }
  
}

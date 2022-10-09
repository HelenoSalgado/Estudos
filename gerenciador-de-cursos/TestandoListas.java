import java.util.ArrayList;
import java.util.Collections;

public class TestandoListas {

  public static void main(String[] args) {
    
    ArrayList<String> aulas = new ArrayList<>();

    String aula1 = "Conhecendo mais de listas";
    String aula2 = "Modelando a class aula";
    String aula3 = "Trabalhando com cursos e sets";
    String aula4 = "Aumentando loren ipson";

    aulas.add(aula1);
    aulas.add(aula2);
    aulas.add(aula3);
    aulas.add(aula4);

    System.out.println(aulas);

    aulas.remove(0);

    System.out.println(aulas);

    for (String aula : aulas) {

      System.out.println("Aula: " + aula);
      
    }

    // Percorre o array de objetos.

    aulas.forEach(aula -> {

      System.out.println("Lambda: " + aula);

    });

    // Busca o valor pelo índice.

    System.out.println(aulas.get(1));

    // Organiza por ordem alfabética.

    Collections.sort(aulas);

    System.out.println(aulas);






  }

}
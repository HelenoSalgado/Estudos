//import java.util.ArrayList;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class TestaCurso {
    public static void main(String[] args) {

        Curso javaColecoes = new Curso("Dominando as colecoes do Java", "Paulo Silveira");

        javaColecoes.adiciona(new Aula("Trabalhando com ArrayList", 21));
        javaColecoes.adiciona(new Aula("Criando uma Aula", 20));
        javaColecoes.adiciona(new Aula("Modelando com colecoes", 24));

        System.out.println(javaColecoes.getAulas());
        System.out.println("Tempo Total: " + javaColecoes.getTempoTotal());

        // Modificar aulas por ordem alfabética
        // Como o atributo aulas é privado e o getAulas é unmodifiableList para que somente aceite leitura, o método sort para ordenação não é possivel, por isso é preciso instanciar outro objeto em cima do array de aulas.

        List<Aula> aulasOrdenadas = new ArrayList<>(javaColecoes.getAulas());

        Collections.sort(aulasOrdenadas);

        System.out.println(aulasOrdenadas);



    }
}
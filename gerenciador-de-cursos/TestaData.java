import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class TestaData {

  public static void main(String[] args) {
    
    LocalDate hoje = LocalDate.now();

    System.out.println(hoje);

    DateTimeFormatter dataFormatada = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    DateTimeFormatter dataFormatadaComHoras = DateTimeFormatter.ofPattern("dd/MM/yyyy hh:mm");

    String dataDeHoje = dataFormatada.format(hoje);

    System.out.println(dataDeHoje);

    LocalDateTime agora = LocalDateTime.now();

    System.out.println(agora.format(dataFormatadaComHoras));

  }
  
}

package contabank.javaio;

import java.io.File;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Locale;
import java.util.Scanner;

//import javax.print.DocFlavor.STRING;

public class TesteLeituraCSV {
  
  public static void main(String[] args) throws Exception {
    
    Scanner scanner = new Scanner(new File("contas.csv"), "UTF-8");
    
    while (scanner.hasNextLine()) {
      
      String linha = scanner.nextLine();
      
      System.out.println(linha);
      
      // Ler conteúdo da linha com array através do método split.
      
      String[] items = linha.split(",");
      
      System.out.println(Arrays.toString(items));
      
      // Ler conteúdo da linha aprofundando na classe Scanner.
      
      Scanner linhaItems = new Scanner(linha);
      //Scanner linhaItems = new Scanner(linha, "UTF-8");
      linhaItems.useLocale(Locale.US);
      linhaItems.useDelimiter(",");
      
      String tipoConta = linhaItems.next();
      int agencia = linhaItems.nextInt();
      int numero = linhaItems.nextInt();
      String nomeTitular = linhaItems.next();
      double saldo = linhaItems.nextDouble();
      
      // System.out.println(valor1 + " " + valor2 + " " + valor3 + " " + valor4 + " " + valor5);
      
      String valorFormatado = String.format(new Locale("pt", "BR"), "%s %04d-%08d %s %s", tipoConta, agencia, numero, nomeTitular, saldo);
      
      
      System.out.println(valorFormatado);
      
      System.out.println(linhaItems);
      
      linhaItems.close();
      
    }
    
    scanner.close();
    
    // Encoding
    
    String s = "ç";
    System.out.println(s.codePointAt(0));
    
    Charset charset = Charset.defaultCharset();
    System.out.println(charset.displayName());
    
    byte[] bytes = s.getBytes("windows-1252");
    System.out.print(bytes.length + ", windows-1252, ");
    String sNovo = new String(bytes, "windows-1252");
    System.out.println(sNovo);
    
    bytes = s.getBytes("UTF-16");
    System.out.print(bytes.length + ", UTF-16, ");
    sNovo = new String(bytes, "UTF-16");
    System.out.println(sNovo);
    
    bytes = s.getBytes(StandardCharsets.US_ASCII);
    System.out.print(bytes.length + ", US-ASCII, ");
    sNovo = new String(bytes, "US-ASCII");
    System.out.println(sNovo);
    
  }
  
}

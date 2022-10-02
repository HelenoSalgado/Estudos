package contabank.javaio;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class TesteLeitura {

  public static void main(String[] args) throws IOException {

    // Fluxo de entrada para arquivo

    FileInputStream arquivo = new FileInputStream("testeLeitura.txt");
    InputStreamReader lerArquivo = new InputStreamReader(arquivo);
    BufferedReader ordenaCaracteres = new BufferedReader(lerArquivo);

    String ordenaEmLinha = ordenaCaracteres.readLine();

    while (ordenaEmLinha != null) {

      System.out.println(ordenaEmLinha);

      ordenaEmLinha = ordenaCaracteres.readLine();
      
    }

    ordenaCaracteres.close();
 
  }
  
}

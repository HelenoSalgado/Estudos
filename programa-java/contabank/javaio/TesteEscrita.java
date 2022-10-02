package contabank.javaio;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;

public class TesteEscrita {

  public static void main(String[] args) throws IOException{

    // Fluxo de entrada para arquivo

    FileOutputStream arquivo = new FileOutputStream("testeEscrita.html");
    Writer escreverArquivo = new OutputStreamWriter(arquivo);
    BufferedWriter escrever = new BufferedWriter(escreverArquivo);

    escrever.write("<h1>Olá mundo</h1><p>Estou gravando arquivo html com JAVA.</p>");
    escrever.newLine();
    escrever.newLine();
    escrever.write("asfasdfsafdas dfs sdf asf assdß");

    escrever.close();
 
  }
  
}

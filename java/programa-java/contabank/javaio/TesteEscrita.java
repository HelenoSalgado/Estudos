package contabank.javaio;

//import java.io.File;
import java.io.FileWriter;
//import java.io.BufferedWriter;
//import java.io.File;
//import java.io.FileOutputStream;
import java.io.IOException;
//import java.io.OutputStreamWriter;
//import java.io.PrintStream;
//import java.io.Writer;

public class TesteEscrita {

  public static void main(String[] args) throws IOException{

    // Fluxo de entrada para arquivo

    //FileOutputStream arquivo = new FileOutputStream("testeEscrita.html");

    //Writer escreverArquivo = new OutputStreamWriter(new FileOutputStream("testeEscrita.html"));

    //BufferedWriter escrever = new BufferedWriter(escreverArquivo);

    //escrever.write("<h1>Olá mundo</h1><p>Estou gravando arquivo html com JAVA.</p>");

    //escrever.newLine();

    //escrever.write("<em>Os olhos veem o que traz consigo o poder de ver</em>");


    String newLine = System.lineSeparator();

    FileWriter escrever = new FileWriter("testeEscrita.html");

    escrever.write("<h1>Olá mundo</h1>");

    escrever.write(newLine);

    escrever.write("<p>Estou gravando arquivo html com JAVA.</p>");

    escrever.write(newLine);

    escrever.write("<em>Os olhos veem o que traz consigo o poder de ver</em>");

    escrever.close();
 
  }
  
}

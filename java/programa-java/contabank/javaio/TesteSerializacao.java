package contabank.javaio;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

import contabank.modelos.Cliente;

public class TesteSerializacao {
  
  public static void main(String[] args) 
  throws IOException,  ClassNotFoundException {

    // Grava arquivo no SSD
    
    String nome = "Nico Steppat";
    
    ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("objeto.bin"));

    oos.writeObject(nome);

    oos.close();

    // Resgata arquivo do SSD
    
    ObjectInputStream ois = new ObjectInputStream(new FileInputStream("objeto.bin"));

    String nomeLeitura = (String) ois.readObject();

    ois.close();
    
    System.out.println(nomeLeitura);

    // Grava um objeto 

    Cliente cliente = new Cliente();

    cliente.setNome("Heleno Salgado");
    cliente.setCPF("12333245435");
    cliente.setProfissao("Dev");
    
    ObjectOutputStream ooCliente = new ObjectOutputStream(new FileOutputStream("cliente.bin"));

    ooCliente.writeObject(cliente);

    ooCliente.close();
    
  }
  
}

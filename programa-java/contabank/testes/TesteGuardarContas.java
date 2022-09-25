package contabank.testes;

import java.util.ArrayList;

import contabank.contas.ContaCorrente;
import contabank.contas.ContaPoupanca;
import contabank.contas.guardarcontas.GuardarContas;
import contabank.modelos.Conta;

public class TesteGuardarContas {
  
  public static void main(String[] args) {
    
    GuardarContas contas = new GuardarContas();
    
    Conta cc = new ContaCorrente(22, 11);
    contas.adicionar(cc);
    
    Conta cp = new ContaPoupanca(3333, 33);
    contas.adicionar(cp);
    
    System.out.println(contas.getPosicaoLivre());

    
    // Usando pacote java.util: class ArrayList com Generics.
    
    ArrayList<Conta> lista = new ArrayList<Conta>();

    lista.add(cc);
    lista.add(cp);
    
    System.out.println("Tamanho: " + lista.size());
    
    Conta ref = lista.get(0);
    System.out.println(ref.getNumero());
    
    lista.remove(0);
    System.out.println("Tamanho: " + lista.size());
    
    for(int i = 0; i < lista.size(); i++) {
      Object oRef = lista.get(i);
      System.out.println(oRef);
    }
    
    System.out.println("----------");
    
    for(Conta oRef : lista) {
      System.out.println(oRef);
    }
    
    
  }
  
}

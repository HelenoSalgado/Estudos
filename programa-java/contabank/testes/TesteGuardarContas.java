package contabank.testes;

import java.util.ArrayList;
import java.util.Comparator;

import contabank.contas.ContaCorrente;
import contabank.contas.ContaPoupanca;
import contabank.contas.guardarcontas.GuardarContas;
import contabank.modelos.Cliente;
import contabank.modelos.Conta;

public class TesteGuardarContas {
  
  public static void main(String[] args) {
    
    GuardarContas contas = new GuardarContas();
    
    Conta cc = new ContaCorrente(22, 22222224);
    Cliente c1 = new Cliente();
    c1.setNome("Heleno");
    cc.setTitular(c1);
    contas.adicionar(cc);
    
    Conta cp = new ContaPoupanca(3333, 33);
    Cliente c2 = new Cliente();
    c2.setNome("Ana Maria");
    cp.setTitular(c2);
    contas.adicionar(cp);

    ContaCorrente contaCorrente = new ContaCorrente(10101, 1232456);
    Cliente c3 = new Cliente();
    c3.setNome("Bruna");
    contaCorrente.setTitular(c3);
    contas.adicionar(contaCorrente);

    ContaPoupanca contaPoupanca = new ContaPoupanca(2020, 30001);
    Cliente c4 = new Cliente();
    c4.setNome("Carol");
    contaPoupanca.setTitular(c4);
    contas.adicionar(contaPoupanca);

    
    //System.out.println(contas.getPosicaoLivre());

    
    // Usando pacote java.util: class ArrayList com Generics.
    
    ArrayList<Conta> lista = new ArrayList<Conta>();

    lista.add(cc);
    lista.add(cp);
    lista.add(contaCorrente);
    lista.add(contaPoupanca);

    for(Conta oRef : lista) {
      System.out.println(oRef.getNumero());
    }

    // Ordenar Lista

    //NumeroDaContaComparator comparator = new NumeroDaContaComparator();
    lista.sort(new TitularDaContaComparator());
    
    //System.out.println("Tamanho: " + lista.size());
    
    //Conta ref = lista.get(0);
    //System.out.println(ref.getNumero());
    
    //lista.remove(0);
    //System.out.println("Tamanho: " + lista.size());
    
    for(int i = 0; i < lista.size(); i++) {
      //Object oRef = lista.get(i);
      //System.out.println(oRef);
    }
    
    System.out.println("----------");
    
    for(Conta oRef : lista) {
      System.out.println(oRef.getNumero() + ", " + oRef.getTitular().getNome());
    }
    
    
  }
  
}

// Classe para ordenar lista por número de agência.

class NumeroDaContaComparator implements Comparator<Conta> {

  @Override
  public int compare(Conta c1, Conta c2) {

          if(c1.getNumero() < c2.getNumero()) {
              return -1;
          }

          if(c1.getNumero() > c2.getNumero()) {
              return 1;
          }

      return 0;
  }
}

// Classe para ordenar lista por nome do titular.

class TitularDaContaComparator implements Comparator<Conta> {

  @Override
  public int compare(Conta c1, Conta c2) {

          String nomeC1 = c1.getTitular().getNome();
          String nomeC2 = c2.getTitular().getNome();
          return nomeC1.compareTo(nomeC2);
  }

}
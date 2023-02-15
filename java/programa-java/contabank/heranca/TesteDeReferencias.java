package contabank.heranca;

public class TesteDeReferencias {

  public static void main(String[] args) {

    Designer designer = new Designer();
    designer.setNome("Marcos");
    designer.setSalario(5000.0);


    ControleDeBonificacao controle = new ControleDeBonificacao();
    controle.registra(designer);

    System.out.println(controle.getSoma());

  }
}

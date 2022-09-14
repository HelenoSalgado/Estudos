public class TestaWhile {

  public static void main(String[] args) {

    int contador = 0;
    
    while (contador <= 10) {

      System.out.println(contador);

      //contador += 1;

      contador++;
      
    }

    System.err.println("Com método for.");

    for (int contador02 = 0; contador02 <= 10; contador02++) {

      System.out.println(contador02);

    }


  }
  
}

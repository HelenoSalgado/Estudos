public class LacosEncadeados {

  public static void main(String[] args) {
    
    for (int multiplicador = 1; multiplicador <= 10; multiplicador++) {

      for (int contador = 0; contador < multiplicador; contador++) {

        System.out.print(contador * multiplicador);

        System.out.print(" ");

      }
      System.out.println();
    }
    
  }
  
}

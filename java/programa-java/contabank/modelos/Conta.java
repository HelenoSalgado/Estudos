package contabank.modelos;

/**
 * @author Heleno Salgado
 * @version 1.0
 */

import contabank.heranca.excecoes.SaldoInsuficiente;

/**
* Construtor para inicializar o objeto Conta a partir da agencia e numero
* @param agencia
* @param numero
*/

public abstract class Conta {

    private double saldo;
    private int agencia;
    private int numero;
    private Cliente titular;
    private static int total;

    // Construtor: valores iniciais obrigatórios para inicialização do objeto.


    public Conta(int agencia, int numero) {

      this.agencia = agencia;
      this.numero = numero;
      Conta.total++;

    }

    public void deposita(double valor) {

      this.saldo += valor;
      
    }

    /**
    * Valor precisa ser menor ou igual ao saldo
    * @param valor 
    * @throws SaldoInsuficienteException
    */

    public void saca(double valor) {

      if (this.saldo < valor) {
        
        throw new SaldoInsuficiente("Saldo insuficiente: " + saldo);
        
      }

      this.saldo = this.saldo - valor;
    
    }

    public void transfere( double valor, Conta destino) {

        this.saca(valor);
        destino.deposita(valor);

    }

    public double getSaldo() {

      return this.saldo;

    }

    public int getNumero() {

      return this.numero;

    }

    // public void setNumero(int numero) {

    //   this.numero = numero;

    // }

    public int getAgencia() {

      return this.agencia;

    }

    // public void setAgencia(int agencia) {

    //   this.agencia = agencia;

    // }

    public Cliente getTitular() {

      return this.titular;

    }

    public void setTitular(Cliente titular) {

      this.titular = titular;

    }

    public static int getTotal() {

      return Conta.total;

    }

    public void setSaldo(double saldo) {
      this.saldo = saldo;
    }

    public void setAgencia(int agencia) {
      this.agencia = agencia;
    }

    public void setNumero(int numero) {
      this.numero = numero;
    }

    public static void setTotal(int total) {
      Conta.total = total;
    }

}

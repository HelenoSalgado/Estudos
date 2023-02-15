package contabank.contas.guardarcontas;

import contabank.modelos.Conta;

public class GuardarContas {

  private Conta[] referencia;
  private int posicaoLivre;

    public GuardarContas() {

        this.referencia = new Conta[10];
        
    }

    public void adicionar(Conta ref) {

      this.referencia[this.posicaoLivre] = ref;
      this.posicaoLivre++;

    }

    public int getPosicaoLivre() {

      return this.posicaoLivre;

    }


  
}

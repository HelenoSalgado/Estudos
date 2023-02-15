package contabank.heranca;

// Essa é uma class abstrata intermediária, entre funcionários comuns e funcionários com acesso ao sistema interno do bank.

public abstract interface Autenticavel{

    public Boolean autentica(int senha);

    public void setSenha(int senha);
  
}

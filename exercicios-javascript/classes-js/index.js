class Cliente{
    nome;
    idade;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;
    sacar(valor){
        if(this.saldo >= valor){
           this.saldo -= valor
        }
    }
    depositar(valor){
        if(valor > 0){
            this.saldo += valor
        }
    }
}

const client1 = new Cliente()
client1.nome = 'Heleno Salgado'
client1.idade = 23
client1.cpf = 10010010000

const contaCorrente = new ContaCorrente()
contaCorrente.agencia = 1001
contaCorrente.saldo = 100
contaCorrente.sacar(50)
contaCorrente.depositar(200)

console.log(client1)
console.log(contaCorrente)
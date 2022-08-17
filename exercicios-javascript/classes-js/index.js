import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Heleno", 10101111111);
const cliente2 = new Cliente("Maria", 88822233309);


const contaCorrente1 = new ContaCorrente(1001, cliente1);
contaCorrente1.depositar(500);
contaCorrente1.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrente1.tranferir(valor, conta2);

console.log(contaCorrente1);
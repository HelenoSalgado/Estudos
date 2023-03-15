// Não é obrigatório usar type annotation.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var nome = "Heleno Salgado";
var idade = 25;
var estuda = true;
// O uso do boolean no typescript é muito parecido com seu uso no javascript, tendo com diferença o type annotation.
console.log(nome + ", " + idade + " anos, Estuda?" + " " + estuda);
function adicionarNumero(num1, num2) {
    return num1 + num2;
}
;
console.log(adicionarNumero(5, 5));
var produto;
produto = { objeto: "lápis", preco: 2.00, quantidade: 5 };
console.log(produto);
// Exemplo number
var num1 = 23.0; // Ponto flutuante;
var num2 = 0x346; // Hexadecimal;
var num3 = 668; // Octal;
var num4 = 49; //Binário;
// Exemplo bigint | não é do tipo number
// Sempre que usuarmos, devemos mudar o target do arquivo "tsconfig.json" para es2020
var big1 = 9007199254740991n;
var big2 = 9007199254740995n;
var big3 = 0x20000000000003n;
var big4 = 9007199254740995n;
// Arrays
var frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[0]);
var frutas1 = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[3]);
// Exemplo de Array com Spread Operator
var listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = __spreadArray(__spreadArray([], listaNumeros, true), [6, 7, 8, 9, 10], false);
console.log(listaNumeros);
// Exemplo de Array com laço de iteração
var linguagensArray = new Array('JavaScript', 'Python', 'PHP', 'C#');
function funcaoLinguagens(linguagens) {
    for (var i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
// Tipo Tupla
var pessoa;
pessoa = ['Heleno Salgado', 'Estuda', 26];
console.log(pessoa);
// Usando Tupla com spread operator
var listaFrutas2 = __spreadArray([5, true], frutas, true);
console.log(listaFrutas2);

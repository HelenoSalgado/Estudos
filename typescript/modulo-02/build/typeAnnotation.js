"use strict";
// Não é obrigatório usar type annotation.
let nome = "Heleno Salgado";
let idade = 25;
let estuda = true;
// O uso do boolean no typescript é muito parecido com seu uso no javascript, tendo com diferença o type annotation.
console.log(nome + ", " + idade + " anos, Estuda?" + " " + estuda);
function adicionarNumero(num1, num2) {
    return num1 + num2;
}
;
console.log(adicionarNumero(5, 5));
let produto;
produto = { objeto: "lápis", preco: 2.00, quantidade: 5 };
console.log(produto);
// Exemplo number
let num1 = 23.0; // Ponto flutuante;
let num2 = 0x346; // Hexadecimal;
let num3 = 0o1234; // Octal;
let num4 = 0b110001; //Binário;
// Exemplo bigint | não é do tipo number
// Sempre que usuarmos, devemos mudar o target do arquivo "tsconfig.json" para es2020
let big1 = 9007199254740991n;
let big2 = 9007199254740995n;
let big3 = 0x20000000000003n;
let big4 = 9007199254740995n;
// Arrays
let frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[0]);
let frutas1 = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[3]);
// Exemplo de Array com Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// Exemplo de Array com laço de iteração
let linguagensArray = new Array('JavaScript', 'Python', 'PHP', 'C#');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
// Tipo Tupla
let pessoa;
pessoa = ['Heleno Salgado', 'Estuda', 26];
console.log(pessoa);
// Usando Tupla com spread operator
let listaFrutas2 = [5, true, ...frutas];
console.log(listaFrutas2);

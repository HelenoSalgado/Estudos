// Não é obrigatório usar type annotation.
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

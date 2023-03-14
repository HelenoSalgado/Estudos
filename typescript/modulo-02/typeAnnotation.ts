// Não é obrigatório usar type annotation.

let nome: string = "Heleno Salgado";
let idade: number = 25;
let estuda: boolean = true;

// O uso do boolean no typescript é muito parecido com seu uso no javascript, tendo com diferença o type annotation.

console.log(nome + ", " + idade + " anos, Estuda?" + " " + estuda)

function adicionarNumero(num1:number, num2:number) {
    return num1 + num2;
};

console.log(adicionarNumero(5,5));

let produto: {
    objeto: String,
    preco: Number,
    quantidade: Number
};

produto = { objeto: "lápis", preco: 2.00, quantidade: 5};

console.log(produto);

// Exemplo number
let num1: number = 23.0; // Ponto flutuante;
let num2: number = 0x346; // Hexadecimal;
let num3: number = 0o1234; // Octal;
let num4: number = 0b110001; //Binário;

// Exemplo bigint | não é do tipo number
// Sempre que usuarmos, devemos mudar o target do arquivo "tsconfig.json" para es2020
let big1: bigint = 9007199254740991n;
let big2: bigint = 0b100000000000000000000000000000000000000000000000000011n;
let big3: bigint = 0x20000000000003n;
let big4: bigint = 0o400000000000000003n;

// Arrays
let frutas: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[0]);

let frutas1: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[3]);

// Exemplo de Array com Spread Operator

let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];

console.log(listaNumeros);

// Exemplo de Array com laço de iteração

let linguagensArray:string[] = new Array('JavaScript', 'Python', 'PHP', 'C#');

function funcaoLinguagens(linguagens:string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]); 
    }
}

funcaoLinguagens(linguagensArray);

// Tipo Tupla
let pessoa: [string, string, number];
pessoa = ['Heleno Salgado', 'Estuda', 26];
console.log(pessoa);

// Usando Tupla com spread operator
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...frutas];
console.log(listaFrutas2);
const msm = document.querySelector('body');

// const idade = 0;

// msm.innerText = 'Sua idade é ' + (idade || 'Não informado');


// msm.innerText = 'Sua idade é ' + (idade ?? 'Não informado');

const user = {
  name: 'Heleno',
  age: '1000',
  job: 'Polivalente',
  address: {
    street: '21',
    bairro: 'Porto de manga'
  }

}

//msm.innerText = JSON.stringify(user);

//msm.innerText = ('name' in user);

//msm.innerText = Object.keys(user);

//msm.innerText = JSON.stringify(Object.values(user));

// Retorna um vetor

//msm.innerText = JSON.stringify(Object.entries(user));

// Desestruturação
// Posso renomear variável usando :
// Posso setar valor padrão caso a variável, chave, não exista usuando =

// const { age: idade, nome, job, address, project = 'Não informado' } = user;

// Também posso desestruturar objeto dentro ou no parâmetro de uma função;

// function mostraIdade(user){
//   let { age } = user;
//   return age;
// }

// function mostraIdade({ age }){
//   return age;
// }

// Rest Operator

// Retorna todas as variáveis restantes a partir da primeira definida;

// Também vale para arrays;

// const { name, ...rest } = user;

// msm.innerText = JSON.stringify(rest);

// const array = [1,2,3,4,5,6];

// const [first, second, ...rest] = array;

// Se colocar uma vírgula, vai pular o valor correspondente aquela posição do array;

// const [first, , terc,  ...rest] = array;

// Short Syntax

// let name1 = 'Heleno';
// let age1 = '1000';

// const userData = {
//   name1,
//   age1
// }

// Optional Chaining

// msm.innerText = user.address?.street ?? 'Não informado';

msm.innerText = user.address?.street ?? 'Não informado';

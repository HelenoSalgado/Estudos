let paragraf: any = document.querySelector('#date');
let population: number = 7.888;

let message: string = "Hello World. " + `Atualmente, o mundo tem ${population} bilhões de pessoas | (2021)`;
console.log(message);

paragraf.textContent = message;
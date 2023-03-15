var paragraf = document.querySelector('#date');
var population = 7.888;
var message = "Hello World. " + "Atualmente, o mundo tem ".concat(population, " bilh\u00F5es de pessoas | (2021)");
console.log(message);
paragraf.textContent = message;

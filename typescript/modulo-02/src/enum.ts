// Por padrão, os valores enum começam com um valor de 0, portanto, Permanent é 0, Temp é 1 e Apprentice é 2. Se você quiser que eles comecem com um valor diferente, neste caso 1, especifique isso na declaração enum. Faça as edições a seguir para que o enum inicie os valores em 1.

import { CLIENT_RENEG_LIMIT } from "tls";

enum ContractStatus {
    Permanent,
    Temp,
    Apprentice
};

const employeeStatus: ContractStatus = ContractStatus.Temp;

console.log(employeeStatus);
console.log(ContractStatus);

const enum Comida{
    Hamburger = 'Hamburger',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Churrasco = 'Churrasco',
};

function comida(c: Comida){
    return 'Comida apetitosa: ' + c;
};

console.log(comida(Comida.Pizza));
//console.log(comida(5));

// Por padrão, os valores enum começam com um valor de 0, portanto, Permanent é 0, Temp é 1 e Apprentice é 2. Se você quiser que eles comecem com um valor diferente, neste caso 1, especifique isso na declaração enum. Faça as edições a seguir para que o enum inicie os valores em 1.
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
;
var employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);

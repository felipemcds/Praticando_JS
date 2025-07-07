//Exercício 1 Funções

function potencia(num,exp){
    return num**exp;
}

let base = parseInt(prompt("Potenciação - Digite a base"));
let expoente = parseInt(prompt("Potenciação - Digite o Expoente"));
let resultado = potencia(base,expoente);

alert(`O resultado de ${base} elevado ao ${expoente} é: ${resultado}`);


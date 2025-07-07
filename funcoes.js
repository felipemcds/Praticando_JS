//Exercício 1 Funções

/*
function potencia(num,exp){
    return num**exp;
}

let base = parseInt(prompt("Potenciação - Digite a base"));
let expoente = parseInt(prompt("Potenciação - Digite o Expoente"));
let resultado = potencia(base,expoente);

alert(`O resultado de ${base} elevado ao ${expoente} é: ${resultado}`);
*/

//Exercício 2 Expressão de Funções
// criar função que calcula o fatorial de um número usando recursão.
// fatorial: n! multiplicação de n por seus antecessores maiores ou iguais a 1
// ex: 5! = 5 x 4 x 3 x 2 x 1

let numero = parseInt(prompt("Digite um número para descobrir o seu fatorial:"));

const fatorial = function f(num){
    if(num===0 || num===1) return 1;
    return num* f(num-1);
}

alert(`O fatorial do número ${numero} é: ${fatorial(numero)}`)
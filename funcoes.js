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
/*
let numero = parseInt(prompt("Digite um número para descobrir o seu fatorial:"));

const fatorial = function f(num){
    if(num===0 || num===1) return 1;
    return num* f(num-1);
}

alert(`O fatorial do número ${numero} é: ${fatorial(numero)}`)
*/

//Exercício 3 Arrow Functions
// Criar uma funcao para calcular juros compostos
// Funcao deve receber os valores no formato inteiro: valor, % de juros e Tempo
// formula: valor*(juros elevador ao tempo)
/*
let valor = parseInt(prompt("Informe um valor para ser calculado o rendimento:"));
let juros = parseInt(prompt("Informe a taxa de juros a.m:"));
let meses = parseInt(prompt("Informe a quantidade de meses desejada:"));

const valorFinal = (valorInicial,juros,tempo) => (valorInicial*((1+(juros/100))**tempo)); // Não uso function, uso os parâmetros que irei precisar
 //como a minha arrow function só possui 1 linha, não preciso usar o return
alert(`O rendimento de ${valor} a uma taxa de juros de ${juros}a.m em ${meses} meses é de: ${valorFinal(valor,juros,meses).toFixed(2)}`);
*/

//Exercício 4 Callback Functions
// Crie uma função que faça operações matematicas entre 2 valores ( soma e multiplicação )
// função deve receber por parâmetro: operação desejada, valor1 e valor 2
/*

function soma(a,b){return a+b};
function multiplica(a,b){return a*b};

function resultado (operacao,valor1,valor2){
    if(operacao==="+"){
        return soma(valor1,valor2);
    }
    return multiplica(valor1,valor2);
}

let operador = prompt("Digite a Operação desejada (+) => Soma ou (*) => Multiplicação");

while(operador!=="+" && operador!=="*"){
    operador = prompt("Caractere Inválido!\nDigite a Operação desejada (+) => Soma ou (*) => Multiplicação");
}

let num1 = parseInt(prompt("Digite o Primeiro número"));
let num2 = parseInt(prompt("Digite o Segundo número"));

alert(`O resultado final é: ${resultado(operador,num1,num2)}`);
*/

//Callback + Arrow

function soma(a,b){return a+b};
function multiplica(a,b){return a*b};

const resultado = (operacao,valor1,valor2) => {

    if(operacao==="+"){
        return soma(valor1,valor2);
    }
    return multiplica(valor1,valor2);

}

let operador = prompt("Digite a Operação desejada (+) => Soma ou (*) => Multiplicação");

while(operador!=="+" && operador!=="*"){
    operador = prompt("Caractere Inválido!\nDigite a Operação desejada (+) => Soma ou (*) => Multiplicação");
}

let num1 = parseInt(prompt("Digite o Primeiro número"));
let num2 = parseInt(prompt("Digite o Segundo número"));

alert(`O resultado final é: ${resultado(operador,num1,num2)}`);
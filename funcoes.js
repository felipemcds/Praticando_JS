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

/*
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
*/

//Exercício Função setTimeout

/*
const userID = '4545656';

//const avisaUsuario = (ID)=> console.log(`Sessao de ${ID} está inativa`);

//setTimeout(avisaUsuario,3000,userID); //Quando eu preciso usar a função timeout para passar um argumento, passo ele depois do tempo
// Estou chamando a função avisaUsuario após 3000ms

setTimeout((ID)=>alert(`Sessão de ${ID} está inativa!`),4000,userID); //Neste caso já passei a funcao diretamente como argumento
*/

//Exercício 5 Funções (Saudacao)
/*
//const saudacao =(nome)=>{
//    return nome?`Olá ${nome}`:`Olá Pessoa`
//}

const saudacao =(nome)=> nome ===""?`Olá Pessoa`:`Olá ${nome}`; //Usando operador ternário

let nome = prompt("Digite o sue nome: ");
alert(saudacao(nome));
*/

//Exercício 6 Funções (Frete)
//Até 5 km: frete fixo de R$ 5
//De 5.1 km até 20 km: R$ 0,50 por quilômetro
//Acima de 20 km: frete fixo de R$ 20

/*
let quilometragem = parseFloat(prompt("Digite a quilometragem percorrida: "));

const calculaFrete =(km)=>{
    if(km<=5) return 5;
    else if(20>=km) return km*0.5; 
    else return 20;
}

alert(`O custo do seu frete é de R$: ${calculaFrete(quilometragem)}`);
*/

//Exercício 7 Funções (Callback)
//Imagine que você está desenvolvendo uma interface de atendimento online.
// Quando o usuário envia uma pergunta, o sistema precisa simular que está "pensando" ou "processando a resposta", e só depois exibir a resposta final.
// Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:
//o nome do usuário, e uma função de callback que será executada após 3 segundos.

/*
let usuario = prompt("Digite o seu nome");

function responderUsuario(nome,callback){
    alert(`Olá ${nome} Estamos Processando a Sua pergunta ...`);
    setTimeout(callback,3000,nome);
}

function mostrarResposta(nome){
    alert(`${nome}, aqui está a resposta para a sua dúvida:`);
}
alert(responderUsuario(usuario,mostrarResposta));
*/

//Exercício 8 Funções - Consumo (Callback)
// O sistema deve calcular o consumo mensal estimado com base no uso diário 
// classificar o consumo (baixo, moderado ou alto) e exibir uma mensagem clara para o usuário.
// Sua missão é criar três funções separadas, com responsabilidades bem definidas:
// calcularConsumo(potencia, horasPorDia): Retorna o consumo mensal em kWh, com base na fórmula: consumo = (potencia × horasPorDia × 30) / 1000
// classificarConsumo(consumo): Retorna a classificação com base na tabela:
// exibirResumo(nomeAparelho, consumo, classificacao): Exibe uma mensagem como:"Geladeira tem consumo de 180 kWh/mês e é classificada como Consumo moderado."

function calculaConsumo (potencia,horasPorDia,aparelho) {
    return classificaConsumo((potencia*horasPorDia*30)/1000,aparelho);
}

function classificaConsumo (consumo,aparelho) {
    if(consumo<50) return exibeResumo(aparelho,consumo,"Baixo consumo !");
    else if(consumo<200) return exibeResumo(aparelho,consumo,"Consumo Moderado !");
    else return exibeResumo(aparelho,consumo,"Alto Consumo !");
}

function exibeResumo (aparelho,consumo,classificacao) {
    alert(`${aparelho} tem o consumo de ${consumo} kWh/mês e é classificada como ${classificacao}`);
}

let aparelho = prompt("Digite o nome do seu aparelho");
let pot = parseInt(prompt("Informe a potência do seu aparelho em Watts (w): "));
let horas = parseInt(prompt("Informe a quantidade de horas que o aparelho fica ligado por dia: "));

alert(calculaConsumo(pot,horas,aparelho));
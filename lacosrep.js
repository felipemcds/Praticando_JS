//Exercício 1 FOR
//Gerar Números aleatórios de 1 a 30
//Interromper o laço caso o numero gerado seja 15
//interromper depois de 30 tentativas e contar a quantidade de tentativas
//usar Math.floor(Math.Random()*(n)+1)
/*
for(let i=1;i<=30;i++){
    let numeroAleatorio = Math.floor(Math.random()*(50)+1);
    if(numeroAleatorio===15){
        alert(`O ${numeroAleatorio} foi alcançado em ${i} tentativas`);
        break;
    }
    if(i===30){
        alert(`Usou-se ${i} tentativas e não foi gerado o número 15.`);
        continue;
    }
}
*/
//Exercício 2 FOR
// Crie um programa que exiba todos os números pares de 1 até o número final fornecido pelo usuário.
/*
let numero = parseInt(prompt("Digite um numero: "));
let listaPares =[];

for (let i=1;i<=numero;i++){
    if(i%2===0){
        listaPares.push(i);
    }
}
alert(`Esses são os números pares da sequência 1 à ${numero}: ${listaPares}`);
console.log(listaPares);
*/

//Exercício 3 FOR 
//Como você pode percorrer e exibir todos os caracteres de uma senha digitada, um por um?
/*
let senha = prompt("Digite sua senha: ");

for(let i =0;i<senha.length;i++){
    alert(`Caractere ${i+1}: ${senha[i]}`);
}
*/

//Exercício 4 WHILE
//Crie um programa que simule o processamento das caixas, exibindo as válidas e ignorando as danificadas.
//O programa deve parar o processamento assim que 5 caixas válidas forem processadas.
//A linha só pode processar no máximo 5 caixas válidas por vez.
//Mas, algumas caixas com número de identificação negativo precisam ser ignoradas, pois estão danificadas.

/*
let listaCaixas=[];
let listaProcessadas = [];
let caixasProcessadas=0;

while (caixasProcessadas<5){
    let numeroCaixa = Math.floor(Math.random() * 21) - 10;
    listaCaixas.push(numeroCaixa);
    if(numeroCaixa>0){
        listaProcessadas.push(numeroCaixa);
        caixasProcessadas++;
  }
}

for(let i=1;i<=listaCaixas.length;i++){
    let mensagem = listaCaixas[i-1]>0?`Caixa Processada: ${listaCaixas[i-1]}`:`Caixa Danificada: ${listaCaixas[i-1]}`;
    alert(mensagem);
}
 alert(`Limite de caixas processadas Atingido: ${caixasProcessadas} Caixas: ${listaProcessadas}`);
*/

 //Exercício 5 WHILE

 //Você está desenvolvendo o sistema de login de um app interno da empresa. 
 //O sistema precisa permitir que o usuário tente digitar sua senha corretamente até 3 vezes. 
 //Se digitar certo, exibe uma mensagem de acesso permitido. Se errar 3 vezes, bloqueia o acesso.

let senha = prompt("Digite sua senha");
let tentativas =0;

if(senha==="secret"){
    alert("Acesso Liberado!");
}
while(senha!=="secret"){
    tentativas ++;
    alert(`Tentativa ${tentativas} inválida!`)
    if(tentativas===3){
        alert("Senha Bloqueada!");
        break;
    }
    senha = prompt("Digite sua senha");
 }
 alert("Acesso Liberado!");
 

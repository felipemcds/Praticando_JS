//Exercício 1 FOR
//Gerra Números aleatórios de 1 a 50
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


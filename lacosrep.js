//Exercício 1 FOR
//Gerra Números aleatórios de 1 a 50
//Interromper o laço caso o numero gerado seja 15
//interromper depois de 50 tentativas e contar a quantidade de tentativas
//usar Math.floor(Math.Random()*(n)+1)

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

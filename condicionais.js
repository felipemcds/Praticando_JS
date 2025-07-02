//Exercício 1 Condicionais
/*
let num1 = parseInt(prompt("Digite um número:"));
let num2 = parseInt(prompt("Digite outro número:"));
listaOperacao =['+','-','*','/'];
let operacao = prompt("Digite a operação matemática desejada soma (+) , subtracao (-) , divisão (/) ou multiplicacao (*) :");

while(!listaOperacao.includes(operacao)){ 
    operacao = prompt("Operação Inválida! Digite soma (+) , subtracao (-) , divisão (/) ou multiplicacao (*) :");
}

if(operacao === "+"){
    alert(`O Resultado da soma é: ${num1+num2}`);
}else if( operacao === "-"){
    alert(`O Resultado da subtração é: ${num1-num2}`);
}else if( operacao === "*"){
    alert(`O Resultado da multiplicação é: ${num1*num2}`);
}else{
    alert(`O Resultado da divisão é: ${num1/num2}`);;
}
*/

//Exercício 2
// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas.
// Usar operador ternário
/*
let nome = prompt("Digite o nome do aluno: ");
let nota = parseInt(prompt("Digite a nota do aluno - Entre 0 e 10: "));
while(nota<0 || nota>10){
    nota = parseInt(prompt("Valor de Nota incorreto! Digite a nota do aluno - Entre 0 e 10: "));
}
let faltas = parseInt(prompt("Digite a quantidade de faltas que esse aluno teve: "));
let recebeBonus = nota>=8 && faltas<=2?`${nome} Receberá bônus na sua nota.`:`${nome} Não receberá o bonus na nota.`
alert(recebeBonus);
*/

//Exercício 3
// Switch Case

let dia = parseInt(prompt("Digite qual é o dia da semana: \n0-Domingo\n1-Segunda\n2-Terça\n3-Quarta\n4-Quinta\n5-Sexta\n6-Sábado"));
let listaDias = [0,1,2,3,4,5,6];
let diaSemana=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

while(!listaDias.includes(dia)){
    dia = parseInt(prompt("Digite qual é o dia da semana correto: \n0-Domingo\n1-Segunda\n2-Terça\n3-Quarta\n4-Quinta\n5-Sexta\n6-Sábado"));
}

switch(dia){
    case 0:
        alert(`Hoje é ${diaSemana[dia]}\nO Horário de funcionamento é de 10h às 14h`);
        break;
    case 1:
        alert(`Hoje é ${diaSemana[dia]}\nO Horário de funcionamento é de 9h às 18h`);
        break;
    case 2:
        alert(`Hoje é ${diaSemana[dia]}\nO Horário de funcionamento é de 9h às 18h`);
        break;
    case 3:
        alert(`Hoje é ${diaSemana[dia]}\nO Horário de funcionamento é de 9h às 18h`);
        break;
    case 4:
        alert(`Hoje é ${diaSemana[dia]}\nO Horário de funcionamento é de 9h às 18h`);
        break;
    case 5:
        alert(`Hoje é ${diaSemana[dia]}\nO Horário de funcionamento é de 9h às 18h`);
        break;
    case 6:
        alert(`Hoje é ${diaSemana[dia]}\nO Horário de funcionamento é de 10h às 14h`);
        break;
}
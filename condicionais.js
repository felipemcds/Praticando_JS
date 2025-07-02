//Exercício Condicionais

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

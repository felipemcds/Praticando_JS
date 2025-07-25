                            //CONTEÚDO
/*
//Arrays
const arrNumeros = [1,2,3,4,5];
const arrayNumeros2 = [18, 95, 45, 76, 23, 99];
const arrAlunos = ['Juliana','Aline','Solange'];
const arrMisto = [5,true,'texto'];
const arrArrays = [[1,2],['a','b','c'],[true,false]];  // Array de arrays ( chamados de Multidimensionais)
const arrObjetos = [{a:1,a1:2,a2:3},{b:0,b1:1},{c:3}];  // Array de objetos

console.log(arrArrays[0][1]); //[x][y] x= posição do array principal , y= posição do array dentro do array principal
console.log(arrObjetos[0].a1); // Estou acessando a propriedade a1 do primeiro do primeiro objeto do array

// Manipulando arquivos
arrNumeros[0]= 40; // Novo arrNumeros = [40,2,3,4,5], alteração da posição 0
arrNumeros[5]= 100 // Novo arrNumeros = [40,2,3,4,5,100], Inclusão da posição 5
console.log(arrNumeros);

//Percorrendo um array com o for
for (let i =0;i<arrNumeros.length;i++){
    console.log(arrNumeros[i]);
}

for (let i =0; i<arrAlunos.length;i++){
    arrAlunos[i] = arrAlunos[i].toUpperCase();
}
console.log(arrAlunos);

//Percorrendo um array com o for of, no caso a variável numero percorre os valores do array

for (let numero of arrayNumeros2) {
    if (numero + 10 > 100 || numero > 100) continue;
    console.log(numero + 10);
}
console.log(arrayNumeros2);

//Métodos de array

//Push (Adiciona no final do array)
arrayNumeros2 = [18, 95, 45, 76, 23, 99];
arrayNumeros2.push(100); // Adicionei o numero 100 no final
console.log(arrayNumeros2);

//Pop (Remove o último dado do array)
arrayNumeros2.pop(); // Removo o ultimo dado do array, no caso o número 100
console.log(arrayNumeros2);

//IndexOF (Informa qual o índice do elemento pedido)
const index = arrayNumeros2.indexOf(45); //neste caso o numero 45 é a terceira posição, índice 2
console.log(index); //Se você buscar um dado que não existe no array, ele vai retornar "-1"

//Slice (Quando quero "fatiar" um array, ele não altera o array original)
arrayNumeros2 = [18, 95, 45, 76, 23, 99];
console.log(arrayNumeros2.slice(2)) //Retorna o arrayNumeros2 iniciando a partir do indice2 = [45, 76, 23, 99];
console.log(arrayNumeros2);
console.log(arrayNumeros2.slice(2,4)) //Quando passo 2 parâmetros, eu defino o início e o fim, porém o fim real é o indice limite -1 =[45, 76]

//CALLBACKS - MAP() - Pega cada item do array e aplica a função declarada
arrayNumeros2 = [18, 95, 45, 76, 23, 99];

//Tradicional
const arrayCalculado = arrayNumeros2.map(function(num){
   return num*10
})
console.log(arrayCalculado);

//Com Arrow Funciton
const arrayCalculado = arrayNumeros2.map((num)=> num*10);
console.log(arrayCalculado);

//Com Função nomeada
function multiplica10x (num) {
 return num*10;
}
arrayCalculado = arrayNumeros2.map(multiplica10x); //eu mando cada elemento da string para a função realizar o cálculo
console.log(arrayCalculado);

//CALLBACKS - forEach() - Um laço for dentro de um array - Não retorna nada
arrayNumeros2 = [18, 95, 45, 76, 23, 99];

//com Arrow function
arrayNumeros2.forEach((num,i)=>console.log(`O numero ${num} está o indice ${i}`));

//Tradicional
arrayNumeros2.forEach(function(num,i){
    console.log(`O numero ${num} está o indice ${i}`);
})

//Com função nomeada
function informacao (num,i){
    return console.log(`O numero ${num} está o indice ${i}`);
}
arrayNumeros2.forEach(informacao);

//CALLBACKS - filter() - Cria um array com apenas os elementos que passam em um teste (condição)
arrayNumeros2 = [18, 95, 45, 76, 23, 99];

//com Arrow function
const arrayNumeros2 = [18, 95, 45, 76, 23, 99];
const arrayFiltrado = arrayNumeros2.filter(num=>num%5===0);
console.log(arrayFiltrado);

//Tradicional
const arrayNumeros2 = [18, 95, 45, 76, 23, 99];
const arrayFiltrado = arrayNumeros2.filter(function(num){
    return (num%5===0);})

console.log(arrayFiltrado);


//Com função nomeada
const arrayNumeros2 = [18, 95, 45, 76, 23, 99];
function filtraArray(num){
    return(num%5===0);}
    
const arrayFiltrado = arrayNumeros2.filter(filtraArray);
console.log(arrayFiltrado);

//Operador Spread

const original = [1, 2, 3];
const copia = [...original]; //copia os valores do array original e despeja no array cópia, são arrays distintos. Isso é uma deep copy
console.log(copia); // [1, 2, 3]
console.log(original === copia); // false (são arrays diferentes)
original[0]=90; //só alterou o array origginal
console.log(copia);
console.log(original);

//Método Array.isArray()

const arrTeste = [1,2,3,4,5];
console.log(Array.isArray(arrTeste));

*/

/*
                            //PRATICA

//criar um array com uma sequencia de numeros entre x e y

let x = parseInt(prompt("Digite um número para iniciar a sequência: "));
let y = parseInt(prompt("Digite um número para finalizar a sequência: "));
let arraySeq = [];

while(y<=x){
    y = parseInt(prompt("O número final não pode ser maior ou igual que o inicial!\nDigite um número para finalizar a sequência: "));
}
for(let i=0;i<=(y-x);i++){
    arraySeq[i]=(x+i);
}
alert(arraySeq);
*/


// clonar array multidimensional com "deep copy"
//tentativa
/*
let arr1 = [[1,2],3,[4,5,6]];
let arr2 =[];

function copiaArray(dado){
    for (let numero of dado){
        if(Array.isArray(numero)){
            arr2.push([...numero]);
        }else{
            arr2.push(numero);
        }
    }
}

copiaArray(arr1);

arr2[0][0]=99;

console.log(arr2);
console.log(arr1);
*/

// Deep Copy Alura
/*
let array1 = [[1,2],3,[4,5,6]];
let array2 =[];

const copiaArray = (arr) => {
    const copia = [];
    arr.forEach(element => {
       Array.isArray(element)===true? copia.push(copiaArray(element)):copia.push(element)
    });
  return copia;  
}

array2 = copiaArray(array1);

console.log(array1);
console.log(array2);
*/

/*
//filtrar um array e alterar valores específicos
// ex: alterar numeros para strings

const cpfs = ['12323434545', '34658756786', 43254365434, '76547865345', 56768767564];

const cpfsNovo = cpfs.map((num)=>{    //Quando eu uso map, não estou passando o array, estou fazendo iteração elemento por elemento
        if(typeof num === 'number'){
            return num.toString();
        }return num;
})

console.log(cpfsNovo);
*/
                            //EXERCÍCIOS

/*
//Exercício 1 - Arrays
//Crie um array com os valores das despesas.
//Use um loop for para somar os valores

let qtdeDespesas = parseInt(prompt("Defina a quantidade de Despesas a serem listadas: "));
let listaDespesas=[];
let somaDespesas =0;

for(let i=0;i<qtdeDespesas;i++){
    let valorDespesa = parseFloat(prompt(`Digite qual o valor da despesa ${i+1}: `))
    listaDespesas[i] = valorDespesa;
    somaDespesas+=listaDespesas[i];
}

alert(`O valor da soma das despesas é de R$: ${somaDespesas}`);


//Exercício 2 - Arrays

//Crie um array com alguns pedidos.
//Faça uma cópia do array.
//Adicione um novo item apenas na cópia.
//Exiba os dois arrays para mostrar que o original não foi alterado.

let qtdeItens = parseInt(prompt("Defina a quantidade de Itens a serem listados: "));

while(typeof qtdeItens!='number'){
    qtdeItens = parseInt(prompt("A quantidade deve receber um valor numérico\nDefina a quantidade de Itens a serem listados: "));
}
let listaItens = []

for(let i=0;i<qtdeItens;i++){
    let itens = prompt(`Digite qual o nome do Item ${i+1}: `);
    listaItens[i] = itens.toUpperCase();
}

const listaItensclone = listaItens.map((elemento)=>{
    return elemento;
})

listaItensclone[listaItensclone.length-1] = "MEIA";

alert(`${listaItens}\n${listaItensclone}`);
*/

/*
//Exercício 3 - Arrays
//Criar um array com objetos contendo nome e idade de cada participante.
//Usar o método filter() para:
// - Selecionar somente os participantes com 18 anos ou mais.
// - Exibir no console a mensagem "Acesso liberado para: [nome]" para cada um que passou.
//Usar o método map() para criar um novo array com apenas os nomes dos autorizados.
//Exibir a lista de aprovados no final.

const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];

const maiorIdade = participantes.filter(nome=>nome.idade>18);  //Ficar atento que filter retorna true ou false

maiorIdade.forEach(nome=>console.log(`Acesso liberado para ${nome.nome}`));

const autorizados = maiorIdade.map(nome=>nome.nome);

console.log(`Lista de aprovados: ${autorizados}`);
*/

//Exercício 4 - Arrays
// Mostrar todos os produtos (nome, preço, quantidade).
// Filtrar os que venderam mais de 100 unidades e exibir seus nomes.
// Calcular os totais de venda de cada produto.
// Descobrir o mais lucrativo.

const vendas = [];
let lucro=0
let maisVendido=0

const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

console.log(`\nRelatorio de produtos vendidos:\n`)
produtos.forEach(prod=>{
    console.log(`Produto: ${prod.nome} | Preço: ${prod.preco} | Quantidade Vendida: ${prod.quantidadeVendida}`);
})

console.log(`\nProdutos com Venda Acima de 100 unidades:\n`)
const maisVendidos = produtos.filter(prod=>prod.quantidadeVendida>100);
maisVendidos.forEach(prod=>console.log(prod.nome));

console.log(`\nTotal de vendas pro produto:\n`)
produtos.forEach(prod=>{
    const totalVendido = prod.preco*prod.quantidadeVendida;
    vendas.push({Produto:prod.nome,Faturamento:totalVendido});
})
console.log(vendas)

//Produto mais lucrativo
for(let i of vendas){
    if(i.Faturamento>lucro){
        lucro =i.Faturamento;
        maisVendido =i.Produto;
    }continue;
}
console.log(`\nO produto mais lucrativo é o: ${maisVendido} com o faturamento de R$: ${lucro} \n`);
//Arrays
const arrNumeros = [1,2,3,4,5]
const arrMisto = [5,true,'texto'];
const arrArrays = [[1,2],['a','b','c'],[true,false]];  // Array de arrays
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

//.join()
//O método join() é usado para criar uma string a partir dos elementos de um array
// O método join() junta os elementos do array em uma única string
/// separando cada elemento com um separador especificado.
//EX1:
const frutas = ["maçã", "banana", "laranja"];
const resultado = frutas.join(", ");
console.log(resultado); // Output: maçã, banana, laranja

//EX2:
const animais = ["macaco", "zebra", "abelha"];
const resultado = animais.join(", ");
console.log(resultado); // Output: macaco,  zebra, abelha





//.slice()
//O método slice() é usado para retornar uma cópia de parte de um array, especificada pelos índices de início e fim.
//EX1:
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = originalArray.slice();

console.log(copiedArray); // Saída: [1, 2, 3, 4, 5]

//EX2:O método slice() também permite o uso de índices negativos, que contam a partir do final do array. 
const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
const weekend = daysOfWeek.slice(-2);

console.log(weekend); // Saída: ['Sábado', 'Domingo']





//.reverse()
//O método reverse() é usado para inverter a ordem dos elementos em um array. O método reverse() altera o array original.
//EX1:
var arr = [34, 234, 567, 4];
imprimir (arr);
var new_arr = arr.reverse();
imprimir (nova_arr);
//Saída:
//34, 234, 567, 4
//4, 567, 234, 34

//EX2:Caso você precise manter uma cópia da estrutura original podemos utilizar o slice em conjunto do reverse
//Fazendo com que um novo array seja criado, independente do primeiro e depois o invertemos
var arr = [1, 2, 3, 4, 5];
var arrInvertido = arr.slice(0).reverse();
console.log(arr); // [1, 2, 3, 4, 5]
console.log(arrInvertido); // [5, 4, 3, 2, 1]





//.filter()
//O método filter serve para filtrarmos os elementos de um Array. Passamos para ele uma função.
//Se essa função retornar true, o elemento será inserido no novo Array que será criado.
// Se a função retornar false, o elemento será ignorado.
//EX1:
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function buscarNumerosPares (value) {
    if (value % 2 == 0) 
    return value;
}
var numerosPares = numeros.filter(buscarNumerosPares);
console.log(numerosPares);

//EX2:
var estados = ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Rio Grande do Norte", "Santa Catarina", "Acre"];
function retornaEstado (value){
    if (value.charAt(0) == "S") 
    return value;
}
var resultado = estados.filter(retornaEstado);
console.log(resultado)





//.find()
//Utiliza-se  esse método quando queremos encontrar algum elemento dentro no Array.
// Para isso, passamos uma função que irá retornar true ou false.
// O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.
//EX1:
const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const carlos = usersList.find((user, index, array) => user.name === 'Carlos');
/* Resultado:
	{name: 'Carlos', credit: 300}
*/

//EX2:
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12







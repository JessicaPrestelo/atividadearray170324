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





//.findIndex()
//Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento.
//EX1:
const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const carlos = usersList.findIndex((user, index, array) => user.name === 'Carlos');
/* Resultado:
	2
*/

//EX2:
function isNegative(element, index, array) {
    return element < 0;
  }
  
  const int8 = new Int8Array([10, -20, 30, -40, 50]);
  
  console.log(int8.findIndex(isNegative));
  // Expected output: 1




  //.every()
  //O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida.
  //Este método retorna um valor booleano.(Um valor booleano representa um valor de verdade; isto é, TRUE ou FALSE. )
  //EX1:
  const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const result1 = usersList.every((user, index, array) => user.credit < 1000);
const result2 = usersList.every(user => user.credit < 500);

//EX2
const ages = [32, 33, 16, 40];

ages.every(checaridade)

function checaridade(idade) {
  return idade > 18;
}






//.some()
//O .some() faz algo parecido com o .every(). 
//A diferença é que o .every() só retorna true se todos os elementos passarem no teste
// O .some() retorna true se pelo menos um elemento do Array passar no teste.
//EX1:
const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const result = usersList.some((user, index, array) => user.credit === 300);

//EX2:
const ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;





//.sort()
//O .sort() serve para ordenar os elementos de Arrays.
//EX1:
const numbersList = [4, 5, 7, 8, 2];
const orderedList = numbersList.sort((a, b) => {
	if(a < b){
	   return -1;
	} else if(a > b){
		return 1;
	}
	return 0;
})

//EX2:
const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const orderedUsers = usersList.sort((a, b) => a.credit - b.credit);





//.concat()
//Juntar dois ou mais arrays - retorna um novo array.
//EX1:
const array = [1, 2, 3]
const newArray = array.concat([4, 5])

console.log(array) // [1,2,3]
console.log(newArray) // [1,2,3,4,5] 

//EX2:
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]





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
var arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1

//EX2:Caso você precise manter uma cópia da estrutura original podemos utilizar o slice em conjunto do reverse
//Fazendo com que um novo array seja criado, independente do primeiro e depois o invertemos
var arr = [1, 2, 3, 4, 5];
var arrInvertido = arr.slice(0).reverse();
console.log(arr); // [1, 2, 3, 4, 5]
console.log(arrInvertido); // [5, 4, 3, 2, 1]
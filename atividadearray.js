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

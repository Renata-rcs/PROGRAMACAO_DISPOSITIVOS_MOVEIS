// Funções e Arrays
// Crie um script que receba um array de números e faça as seguintes operações:
// 1. Filtre os números pares.
// 2. Multiplique cada número por 2.
// 3. Calcule a soma de todos os números obtidos.
// Utilize o array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] para os testes.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

let numerosPares = numeros.filter(numero => numero % 2 === 0);

let numerosMultiplicados = numerosPares.map(numero => numero * 2);

let soma = numerosMultiplicados.reduce((acc, numero) => acc + numero, 0);

console.log("Números pares:", numerosPares);
console.log("Números multiplicados por 2:", numerosMultiplicados);
console.log("Soma de todos os números obtidos:", soma);
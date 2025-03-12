// Arrays
// Crie um script que receba um array de números e faça as seguintes operações:
// 1. Adicione um número ao final do array.
// 2. Remova o primeiro número do array.
// 3. Encontre o maior número do array.
// 4. Encontre o menor número do array.
// Utilize o array [10, 20, 30, 40, 50] para os testes.

let numeros =  [10, 20, 30, 40, 50]

numeros.push(60)
console.log(numeros)

numeros.shift()
console.log(numeros)

let maiorNum = Math.max(...numeros);
let menorNum = Math.min(...numeros)

console.log(maiorNum)
console.log(menorNum)
// Funções
// Crie um script que tenha uma função que receba um número e retorne:
// 1. O dobro do número.
// 2. O triplo do número.
// 3. O quadrado do número.
// Utilize o número 5 para os testes.

function calcularValores(num) {
    return {
        dobro: num * 2,
        triplo: num * 3,
        quadrado: num ** 2
    };
}


let resultado = calcularValores(5);
console.log(`Dobro: ${resultado.dobro}`);
console.log(`Triplo: ${resultado.triplo}`);
console.log(`Quadrado: ${resultado.quadrado}`);
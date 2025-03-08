// Operadores Aritméticos e de Comparação
// Crie um script que receba dois números e faça as seguintes operações:
// 1. Some os dois números.
// 2. Subtraia o segundo número do primeiro.
// 3. Multiplique os dois números.
// 4. Divida o primeiro número pelo segundo.
// 5. Verifique se o primeiro número é maior que o segundo.
// Utilize os números 15 e 5 para os testes.

let somar = (numA, numB) => numA + numB;
console.log(somar(15, 5)); // 20

let subtrair = (numA, numB) => numA - numB;
console.log(subtrair(15, 5)); // 10

let multiplicar = (numA, numB) => numA * numB;
console.log(multiplicar(15, 5)); // 75

let dividir = (numA, numB) => numA / numB;
console.log(dividir(15, 5)); // 3

function maiorNum(numA, numB) {
    if (numA > numB) {
        return `${numA} é maior que ${numB}`;
    } else if (numA < numB) {
        return `${numB} é maior que ${numA}`;
    } else {
        return "Os números são iguais";
    }
}

console.log(maiorNum(15, 5)); // "15 é maior que 5"
console.log(maiorNum(5, 15)); // "15 é maior que 5"
console.log(maiorNum(10, 10)); // "Os números são iguais"

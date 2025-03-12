// Manipulação de Strings
//Crie um script que receba uma string e faça as seguintes operações:
// 1. Converta a string para maiúsculas.
// 2. Converta a string para minúsculas.
// 3. Inverta a string.
// 4. Substitua todas as ocorrências de uma letra específica por outra.

let string = "Renata";

console.log(string.toUpperCase()); // RENATA
console.log(string.toLowerCase()); // renata
console.log(string.split("").reverse().join("")); // ataneR
console.log(string.replace(/a/g, "o")); // Renoto
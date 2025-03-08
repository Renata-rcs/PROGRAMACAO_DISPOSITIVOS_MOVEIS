// Métodos de Arrays
// Crie um script que receba um array de strings e faça as seguintes operações:
// 1. Converta todas as strings para maiúsculas.
// 2. Filtre as strings que começam com a letra 'A'.
// 3. Crie um novo array com o comprimento de cada string.
// Utilize o array ["Maçã", "Banana", "Abacaxi", "Laranja"] para os testes.

let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];


let frutasMaiusculas = frutas.map((fruta) => fruta.toUpperCase());
console.log(frutasMaiusculas);


let frutasComA = frutas.filter((fruta) => fruta[0].toUpperCase() === "A");
console.log(frutasComA); 


let comprimentos = frutas.map((fruta) => fruta.length);
console.log(comprimentos); 

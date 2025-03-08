// Estruturas de Controle
// Crie um script que receba uma idade e verifique se a pessoa é:
function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else if (idade >= 65) {
        return "Idosa";
    } else {
        return "Maior de idade";
    }
}


console.log(verificarIdade(10)); 
console.log(verificarIdade(25)); 
console.log(verificarIdade(70)); 
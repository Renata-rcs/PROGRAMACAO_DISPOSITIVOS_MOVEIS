// Objetos
// Crie um script que receba um objeto representando uma pessoa e faça as seguintes operações:
// 1. Adicione uma nova propriedade ao objeto.
// 2. Remova uma propriedade do objeto.
// 3. Liste todas as propriedades do objeto.
//Utilize o objeto { nome: "Carlos", idade: 28, cidade: "São Paulo" } para os testes.

let pessoa =   {
     nome: "Carlos", 
     idade: 28,
     cidade: "São Paulo" } 

  // Adicionando um novo atributo (propriedade) ao objeto
  pessoa.telefone = "(61) 98999-9999"
  console.log(pessoa)
  
  // Remover um atributo
  delete pessoa.telefone;
  console.log(pessoa)


let { nome, idade, cidade } = pessoa;

console.log(nome);
console.log(idade); 
console.log(cidade)

  

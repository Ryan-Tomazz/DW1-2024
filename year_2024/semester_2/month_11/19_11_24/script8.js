//Crie um objeto chamado aluno com as propriedades nome, idade, curso. Use desestruturação para extrair o nome e curso do objeto e exiba-os no console.
aluno = {
    nome: "ryan",
    idade: 16,
    curso: "TI",
}

let {nome, curso} = aluno;
console.log(nome,curso)
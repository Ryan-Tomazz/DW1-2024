// Crie um array chamado biblioteca que contenha três objetos, cada um representando um livro. Cada livro deve ter as propriedades titulo, autor e anoPublicacao. Exiba todos os títulos no console.
vetor = [
    {
    titulo: "A Game of thrones",
    autor: "George R. R. Martin",
    anoPublicacao: "1 de agosto de 1996 "
    },

    {
    titulo: "A Clash of Kings",
    autor: "George R. R. Martin",
    anoPublicacao: "16 de novembro de 1998  "
    },

    {
    titulo: "A Storm of Swords",
    autor: "George R. R. Martin",
    anoPublicacao: "8 de agosto de 2000 "
    },
    //function titulo () {
    //    s = vetor.length
    //    for(i=0; i<s;i++){
    //        console.log(vetor[i])
    //    }
    //}
]

function titulo (vetor) {
    s = vetor.length
    for(i=0; i<s;i++){
        
        v = (vetor[i])
        console.log(v.titulo)
    }
}
console.log(titulo(vetor))
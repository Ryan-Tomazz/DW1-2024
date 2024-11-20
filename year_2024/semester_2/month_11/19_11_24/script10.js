// Crie um array chamado `usuarios`, onde cada item é um objeto com as propriedades `nome`, `idade`, e `email`.
// Use `map` para criar um novo array que contenha apenas o `nome` e `email` de cada usuário, ignorando a `idade`.

usuarios = [
    {
        nome: "ryan",
        idade: 16,
        email: "ryantomaztalavieira@gmail.com",
    },
    {
        nome: "dany",
        idade: 16,
        email: "dany@gmail.com",
    },
    {
        nome: "rafa",
        idade: 16,
        email: "rafa@gmail.com",
    }
]

const map1 = usuarios.map((x) =>  x.nome + " " +  x.email)

console.log(map1)
// Crie um array de objetos chamado estoque, onde cada objeto representa um produto com as propriedades id, nome, e quantidade. Escreva uma função que receba o id de um produto e um valor para atualizar a quantidade desse produto no array. Em seguida, exiba o objeto atualizado.
estoque = [
    {   id: 0,
        nome: "notebook",
        quantidade: 10000,
    },
    {   id: 1,
        nome: "geladeira",
        quantidade: 10000,
    },
    {   id: 2,
        nome: "livro",
        quantidade: 10000,
    },
]

function alter (x,y){
    estoque[x]["quantidade"] = y;
    return(estoque[x])
}

console.log(alter(0,1));


// Crie um objeto chamado produto com as propriedades nome, preco e categoria. Use um loop for...in para exibir todas as propriedades e seus valores no console.
produto = {
    nome: "notebook",
    marca: "acer",
    preco: 5000,
    categoria: "eletrônico",
    loop: function() {for (let chave in produto){
        if(produto[chave] == produto.loop){} else{
            console.log(chave,":", produto[chave]);
        }
    }
},
}

produto.loop()
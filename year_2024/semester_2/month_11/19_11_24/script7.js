//Crie um objeto chamado carrinho que possui uma propriedade itens, que é um array de objetos. Cada item deve ter as propriedades nome e preco. Adicione um método dentro do objeto chamado calcularTotal que retorne a soma dos preços dos itens.
carrinho = {
    itens: [
        {
            nome: "geladeira",
            preco: 5000 
        },
        {
            nome: "notebook",
            preco: 5000 
        },
        {
            nome: "TV",
            preco: 5000 
        }
    ],
    calcularTotal: 
                    function(){
                        for(i=0, j=0, s= carrinho.itens.length;i<s;i++){
                           v=  carrinho.itens[i];
                           j += v.preco
                        }
                        return j
                    }
}

console.log(carrinho.calcularTotal())
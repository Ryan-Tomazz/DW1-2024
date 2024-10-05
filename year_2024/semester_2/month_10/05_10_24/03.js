// Faça uma função que dado um número N, imprime na tela todos os valores pares entre N e 1.
function par(n){
    d = 0
    n -=1
    while(n > 2 ){
        d +=2
        console.log(d)  
        n = n - 2        
    }
}
console.log(par(20))
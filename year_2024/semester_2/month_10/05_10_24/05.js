//Faça uma função para imprimir os N primeiros números primos, onde N é recebido por parâmetro pela função. 
function primos(n){
    d = 2
    while(n>=1){
        if(  (d/2 != 1) &&  (d/3 != 1) && (d/5 != 1) && (d/7 != 1) && (d/2 != 1 || d/3 != 1 || d%4 == 0 || d/5 != 1 || d%6 == 0 || d/7 != 1 || d%8 == 0 || d%9 == 0 || d%10 == 0)){
            d+=1
        } else{
            console.log(d)
            n -=1
            d +=1
        }
    }
}
console.log(primos(4))
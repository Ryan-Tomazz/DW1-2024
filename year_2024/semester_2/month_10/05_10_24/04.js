// Um número primo é um número positivo maior que 1 com apenas dois divisores: 1 e o próprio número.
//Faça uma função para determinar se um número é primo ou não. A função deve devolver true ou false
function primo(n){
    if(  (n/2 != 1) &&  (n/3 != 1) && (n/5 != 1) && (n/7 != 1) && (n/2 != 1 || n/3 != 1 || n%4 == 0 || n/5 != 1 || n%6 == 0 || n/7 != 1 || n%8 == 0 || n%9 == 0 || n%10 == 0)){
        console.log('false')
    } else{
        
        console.log("true")
    }
}
console.log(primo(100))
console.log(primo(7)) 
function fator(n){
    x = n
    while (x > 1){
        n = n *(x-1); 
        x--;
    }
    console.log(n)
}
console.log(fator(5))
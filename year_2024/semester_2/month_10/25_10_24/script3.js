function igual(x){
    tamanho = (-(x.length))
    for (i = -1, s = "2", reverse = ""; i>=tamanho;i--){
        s =  x.substr(i,1)
        reverse = reverse + s
    }
    if (x == reverse){
        return true
    } else { return false}
}

console.log(igual("arara")); // Deve exibir: true
console.log(igual("hello")); // Deve exibir: false
function ocorrencia(x,z){
    tamanho = x.length
    x = x.toLowerCase()
    z = z.toLowerCase()
    for(i=0, v = 0; i<=tamanho; i++){
        s =  x.substr(i,1)
        s = s.toLowerCase()
        if (s == z){
            v++
        }
    }
    return v
}

console.log(ocorrencia("banana", "a")); // Deve exibir: 3
console.log(ocorrencia("hello world", "l")); // Deve exibir: 3
function inicial (x){
    tamanho = x.length
    for(i=0, v=""; i<=tamanho; i++){
        s =  x.substr(i,1)
        if (s == s.toUpperCase()){
            v += s
            v = v.trim()
        }
    }
    return v
}

console.log(inicial("João Silva")); // Deve exibir: "JS"
console.log(inicial("Maria Oliveira")); // Deve exibir: "MO"
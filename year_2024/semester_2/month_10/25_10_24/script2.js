function cont(x){
    tamanho = x.length
    for(i=0, v = 0; i<=tamanho; i++){
        s =  x.substr(i,1)
        s = s.toLowerCase()
        if (s == "a" || s == "e" || s == "i" || s == "o"|| s == "u"){
            v++
        }
    }
    return v
}

console.log(cont("open"))
console.log(cont("OpenAI")); // Deve exibir: 4
console.log(cont("JavaScript")); // Deve exibir: 3
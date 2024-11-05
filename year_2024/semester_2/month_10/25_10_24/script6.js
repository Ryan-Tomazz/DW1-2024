function under(x){
    tamanho = x.length
    for (i = 0, v = ""; i<tamanho; i++){
        s = x.substr(i,1)
        if (s == " "){
            t = true
        }
        if(s == s.toUpperCase()){
            v += s.toLowerCase()
        } else{ v+=s}
    }
    for (i=0; i<tamanho; i++){     
        v = v.replace(" ","_")
    }
    return v
}

console.log(under("Hello World")); // Deve exibir: "hello_world"
console.log(under("JavaScript is fun")); // Deve exibir: "javascript_is_fun"

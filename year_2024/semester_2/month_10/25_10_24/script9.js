function rep (x,y,z){
    t = x.length
    for (i=0, v="", a=""; i<t; i++){
        v = x.substr(i,1)
        if(v == y){ 
            v = z
            a+=v
        } else { 
            a+=v
        }
    }
    return a
}

console.log(rep("hello world", "l", "z")); // Deve exibir: "hezzo worzd"
console.log(rep("banana", "a", "o")); // Deve exibir: "bonono"
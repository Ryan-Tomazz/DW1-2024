function average (x){
    s = x.length
    for(i=0,v="", d=""; i<s;i++){
        d = Number(x[i])
        v = Number(v) + Number(d)
        if(i== (s-1)){
            v = v/s
        }
    }return v
}

console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
console.log(average([10, 20, 30])); // Deve exibir: 20
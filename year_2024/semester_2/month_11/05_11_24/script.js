function sum (x){
    s = x.length
    for(i=0,v="", d=""; i<s;i++){
        d = Number(x[i])
        v = Number(v) + Number(d)
    }return v
}

console.log(sum([1, 2, 3, 4])); // Deve exibir: 10
console.log(sum([10, -10, 10])); // Deve exibir: 10
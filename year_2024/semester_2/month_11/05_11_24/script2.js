function max (x){
    s = x.length
    for(i=0, v="";i<s; i++){
        if(x[i]>v){
            v = x[i]
        } 
    }
    return v
}

console.log(max([1, 2, 3, 4, 5])); // Deve exibir: 5
console.log(max([-10, 0, 10, 5])); // Deve exibir: 10
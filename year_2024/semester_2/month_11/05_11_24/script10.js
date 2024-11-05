function fin(x,y){
    s = x.length
    for(i=0, v=""; i<s; i++){
        if (y == x[i]){
            return(i)
        } else{v = ("-1")}
    } return v
}

console.log(fin([1, 2, 3, 4], 3)); // Deve exibir: 2
console.log(fin(["apple", "banana"], "cherry")); // Deve exibir: -1
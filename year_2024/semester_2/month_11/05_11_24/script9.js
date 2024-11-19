function rev (x){
    s = x.length
    for(i=1,v=""; i<=s; i++){
        if (i == s){ v += (x[(s-i)]) } else{
            v = v + (x[(s-i)]) + " "
        } 
    } 
    v = v.split(" ")
    return v
}
console.log(rev([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
console.log(rev(["apple", "banana"])); // Deve exibir: ["banana", "apple"]
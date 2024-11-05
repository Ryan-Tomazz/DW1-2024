function mescli(x,y){
    s = x.length + y.length
    for(i=0, v="", j =""; i<s; i++){
        if (i < x.length){
            v= v + x[i] + " "}
        if (i >= x.length && i == (s-1)){
        v = v + y[(i - x.length)]} else{
                if (i >= x.length){
                v = v + y[(i - x.length)] + " "}
            }
    } 
    v = v.split(" ")
    return v 
}

console.log(mescli([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(mescli(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]
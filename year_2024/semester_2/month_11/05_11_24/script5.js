function rem (x){
    s = x.length
    for(i=0,v="";i<s;i++){
        if(i == (s-1)){
            if (x[i]!=x[i+1]){
                v+=x[i]
            }else {
                if (x[i]!=x[i+1]){
                    v+=x[i]
                    console.log(v)}
            }
        } else {
            if (x[i]!=x[i+1]){
                v= v + x[i] + " "
            }else {
                if (x[i]!=x[i+1]){
                    v= v + x[i] + " "
                    console.log(v)}
            }
        }
        
    }
    v = v.split(" ")
    return v
}

console.log(rem([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(rem(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]
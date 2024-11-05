function som (x){
    s = (x.length) - 1
    for (i=0,v="";i<=s;i++){
        if (x[i]%2 == 0 && i == s ){ v += x[i];  } else{
            if (x[i]%2 == 0 && i == (s-1)){
                v = v  + x[i];
            } else {
                if (x[i]%2 == 0  ){v = v  + x[i] +" "; }  
            }         
        }
    } 
    v = v.split(" ")
    return v
}

console.log(som([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
console.log(som([10, 15, 20, 25])); // Deve exibir: [10, 20]
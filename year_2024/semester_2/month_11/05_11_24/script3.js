function oco(x,z){
    tamanho = x.length
    for(i=0, v = 0; i<=tamanho; i++){
        s =  x[i]
        if (s == z){
            v++
        }
    }
    return v
}

console.log(oco([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
console.log(oco(["apple", "banana", "apple"], "apple")); // Deve exibir: 2
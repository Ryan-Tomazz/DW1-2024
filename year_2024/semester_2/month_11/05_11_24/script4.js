function igual(x){
    if(x[0] == x[1] == x[2]){
        return true
    } else{ 
        return false 
    }  
}
console.log(igual([1, 1, 1])); // Deve exibir: true
console.log(igual([1, 2, 1])); // Deve exibir: false
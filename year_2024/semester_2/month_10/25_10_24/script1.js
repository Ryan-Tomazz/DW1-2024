function reverseString(x){
    tamanho = (-(x.length))
    for (i = -1, s = "2", reverse = ""; i>=tamanho;i--){
        s =  x.substr(i,1)
        reverse = reverse + s
    }
    return reverse
}
console.log(reverseString("oiu"));
console.log(reverseString("javascript")); // Deve exibir: "tpircsavaj"
console.log(reverseString("hello")); // Deve exibir: "olleh"
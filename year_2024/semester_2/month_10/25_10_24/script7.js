function capitalize(x){
    s = x.split(" ")
    t = (s.length) 
    for (i=0, v = "", x = ""; i<t; i++){
        v = s[i]
        v = v[0].toUpperCase() + v.substring(1);
        x = x + v + " "
    }
    return x
}

console.log(capitalize("hello world")); // Deve exibir: "Hello World"
console.log(capitalize("javaScript is awesome")); // Deve exibir: "JavaScript Is Awesome"
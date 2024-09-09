let condicao1 = true
let condicao2 = true
let condicao3 = true

console.log("1")
console.log("2")

if(condicao1 == true){
    console.log("UM")
} else {
    if (condicao2 == true){
        if(condicao3 == true){
            console.log("B")
        } else{
            console.log("C")
        }
    } else {
        console.log("E")
    }
}

console.log("3")
console.log("4")
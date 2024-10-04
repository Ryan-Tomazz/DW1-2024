let mm = "mm"
let m = "m"
let km = "km"

function medida(m,s){
    if(s == "m"){
        m = 100*m
        console.log(m+" centrímetros")
    } else{
        if (s == "mm"){
            m = m/10
            console.log(m+" centrímetros")
        } else{
            if(s == "km"){
                m = 100000*m
                console.log(m+" centrímetros")
            }
        }
    }
}
console.log(medida(40,km))
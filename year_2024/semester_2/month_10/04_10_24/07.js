//Faça uma função para verificar se o uso de álcool compensa mais que o uso de gasolina. Se sim, deve-se retornar True, se não, deve-se retornar False. Sabe-se que álcool compensa se o valor do litro do álcool for abaixo de 70% do valor do litro da gasolina
l = 1
function uso(a,g){
    a = a*l
    g = g*l
    g = g *0.7
    if( a < g){
        console.log("true")
    } else{
        console.log("false")
    }
}

console.log(uso(4.04,6.07))
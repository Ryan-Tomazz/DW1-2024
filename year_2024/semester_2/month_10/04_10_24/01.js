//Elabore uma função que dada a idade de um atleta devolve sua classificação de acordo com as seguintes categorias:
//infantil A = 5 - 7 anos
//infantil B = 8-10 anos
//juvenil A = 11-13 anos
//juvenil B = 14-17 anos
//adulto = maiores de 18 anos

function idade(n){
    if(n >= 5 && n <= 7){
        console.log("infantil a")
    }
    if(n >=8 && n <= 10){
        console.log("infantil b")
    }
    if(n >= 11 && n <=13){
        console.log("juvenil a")
    }
    if(n >= 14 && n <=17){
        console.log("juvenil b")
    }
    else{
        console.log("adulto")
    }
}

console.log(idade(18))
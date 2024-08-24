let inputtroco = document.getElementById("troco")
let inputcalc = document.getElementById("calc")
let divexit = document.getElementById("exit")
let divexit2 = document.getElementById("exit2")
let divexit3 = document.getElementById("exit3")

inputcalc.onclick = calcularTroco


function calcularTroco() {
    let troco = Number(inputtroco.value)
    let celulaVinte = Math.trunc(troco/20)
    let resto = troco%20
    let celulaDez = Math.trunc(resto/10) 
    let moedaUm = resto%10

    //document.write("IMC ="+ imc)//
    divexit.innerText = ("Células de vinte reais:"+ celulaVinte)
    divexit2.innerText = ("Celúlas de dez reais:"+ celulaDez)
    divexit3.innerText = ("Moeda de um real:"+ moedaUm)
}
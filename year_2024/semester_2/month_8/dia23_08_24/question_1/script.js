let inputcapital = document.getElementById("capital")
let inputtaxa = document.getElementById("taxa")
let inputperiodo = document.getElementById("periodo")
let inputcalc = document.getElementById("calc")
let divexit = document.getElementById("exit")

inputcalc.onclick = calcularMontante


function calcularMontante() {
    let capital = Number(inputcapital.value)
    let taxa = Number(inputtaxa.value)
    let periodo = Number(inputperiodo.value)
    let taxaD = taxa /100
    let montante = capital * ((1 + taxaD) ** periodo)
    let juros = montante - capital

    //document.write("IMC ="+ imc)//
    divexit.innerText = "juros = "+juros
}
let inputeconomiaCarro = document.getElementById("economiaCarro")
let inputdistanciaViagem = document.getElementById("distanciaViagem")
let inputpedagioTotal = document.getElementById("pedagioTotal")
let inputvalorCombustivel = document.getElementById("valorCombustivel")
let inputcalc = document.getElementById("calc")
let divexit = document.getElementById("exit")

inputcalc.onclick = calcularCusto

function calcularCusto(){
    let economiaCarro = Number(inputeconomiaCarro.value)
    let distanciaViagem = Number(inputdistanciaViagem.value)
    let pedagioTotal = Number(inputpedagioTotal.value)
    let valorCombustivel = Number(inputvalorCombustivel.value)

    let quantidadeLitro = distanciaViagem/economiaCarro
    let custoCombustivel = quantidadeLitro * valorCombustivel  
    let custoTotal = custoCombustivel + pedagioTotal

    divexit.innerText = custoTotal + (" reais é o custo total da viagem")
}
    
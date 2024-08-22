let inputweight = document.getElementById("weight")
let inputheigt = document.getElementById("height")
let divexit = document.getElementById("exit")
let inputcalc = document.getElementById("calc")

inputcalc.onclick = calcularImc


function calcularImc(){
    let weight = Number(inputweight.value)
    let height = Number(inputheigt.value)
    let imc = weight / (height ** 2)
    
    //document.write("IMC ="+ imc)//
    divexit.innerText = imc
}

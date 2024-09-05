let inputvelocidadeMax = document.getElementById("velocidadeMax")
let inputvelocidadeCarro = document.getElementById("velocidadeCarro")
let divexit = document.getElementById("exit")

inputcalc.onclick = calcularMulta

function calcularMulta() {
    let velocidadeCarro = Number(inputvelocidadeCarro.value)
    let velocidadeMax = Number(inputvelocidadeMax.value)

    let multa = (velocidadeCarro / velocidadeMax)
    let multaPorcentagem = multa * 100
    let porcentagemMulta = multaPorcentagem - 100

    if (porcentagemMulta >50) {
        divexit.innerHTML= "RS 880,41 - Acima de 50% do limite permitido"
    }
    if (porcentagemMulta > 20 && porcentagemMulta < 50) {
        divexit.innerText = "RS 195,23 - de 20% até 50% acima do limite permitido"
    }
    else{
        divexit.innerText = "RS 130,16 - Até 20% acima do limite permitido "
    }
   
}
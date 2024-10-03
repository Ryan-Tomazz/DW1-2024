let inputvelocidadeMax = document.getElementById("velocidadeMax")
let inputvelocidadeCarro = document.getElementById("velocidadeCarro")
let divexit = document.getElementById("exit")
let buttoncalc = document.getElementById("calc")

buttoncalc.onclick = calcularMulta

function calcularMulta() {
    let velocidadeCarro = Number(inputvelocidadeCarro.value)
    let velocidadeMax = Number(inputvelocidadeMax.value)

    let multa = Number(velocidadeCarro / velocidadeMax)
    let multaPorcentagem = multa * 100
    let porcentagemMulta = multaPorcentagem - 100
    let porcentagemMultaInteiro = Math.trunc(porcentagemMulta)

    if (porcentagemMulta > 50) {
        divexit.innerHTML= "Você excedeu + de " + porcentagemMultaInteiro + "% da velocidade máxima. Sua multa é de RS 880,41"
    }
    if (porcentagemMulta > 20 && porcentagemMulta < 50) {
        divexit.innerText =  "Você excedeu + de " + porcentagemMultaInteiro + "% da velocidade máxima. Sua multa é de RS 195,23"
    }
    if (porcentagemMulta <= 20){
        divexit.innerText = "Você excedeu até " + porcentagemMultaInteiro + "% da velocidade máxima. Sua multa é de RS 130,16"
    }
    if(porcentagemMulta <= 0){
        divexit.innerText = "Você não excedeu a velocidade"
    }
    
}
const form = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//ouvinte

form.addEventListener("submit",(e) =>{
    e.preventDefault() 

    const valor = Number(form.inValor.value)
    resp1.innerText = `Valor da compra: R$ ${valor.toFixed(2)}`    //valor total do produto. Independente do número de parcelas

    let valParcelas                            // valor das parcelas
    let numParcelas = Math.floor(valor / 20)   //número de parcelas

//parcelamento máximo em 6 x.
    if(numParcelas > 6){
        valParcelas = valor / 6
        resp2.innerText = `Pode pagar em: 6 x de: R$ ${valParcelas.toFixed(2)}`
//quando o valor for de no mínimo uma parcela
    } else if(numParcelas <= 1){

//para valores entre 2 e 6 parcelas
    } else {
        valParcelas = valo/numParcelas
        resp2.innerText = `Pode pagar em: ${numParcelas} x de R$ ${valParcelas.toFixed(2)}`
    }

})

form.addEventListener("reset", (e) => {
    resp1.innerText = " "          //limpa o conteúdo de h3
    resp2.innerText = " "          //limpa o conteúdo de h3
})
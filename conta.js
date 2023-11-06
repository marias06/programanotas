const form = document.querySelector("form")   //obtém elementos da página
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let numContas = 0     //declara e inicializa contador....
let valTotal = 0     // ... e acumulador (variáveis globais)
let resposta = ""    //string com a resposta a ser exibida

//ouvinte

form.addEventListener("submit", (e) =>{       //"escuta" evento submit do form
    e.preventDefault()                        //evita envio do form
    
    const descricao = form.inDescrição.value   //obtém dados da conta
    const valor = Number(form.inValor.value)

    numContas++                          //adiciona valores ao contador e acumulador
    valTotal = valTotal + valor

    resposta = resposta + descricao + " -R$: " + valor.toFixed(2) + "\n"

    resp1.innerText = `${resposta}-------------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    form.inDescrição.value = ""                   //limpa campos do form
    form.inValor.value = ""
    form.inDescrição.focus()                 //posiciona no campo inDescrição do form
})
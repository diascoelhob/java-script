function contando() {
    var inicio = Number(document.querySelector('input#idinicio').value)
    var fim = Number(document.querySelector('input#idfim').value)
    var passo = Number(document.querySelector('input#idpasso').value)

    resposta = inicio

    while (inicio < fim) {
        inicio += passo
        resposta += ` ${inicio}` 
    }

    var resultado = document.querySelector('section#resultado')
    resultado.innerHTML = resposta
}
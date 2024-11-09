function contando() {
    var inicio = document.querySelector('input#idinicio').value
    var fim = document.querySelector('input#idfim').value
    var passo = document.querySelector('input#idpasso').value

    if (inicio == "" || fim == "" || passo == "") {
        var resultado = document.querySelector('section#resultado')
        resultado.innerHTML = "Impossivel contar..."
    } else {
        var inicio = Number(inicio)
        var fim = Number(fim)
        var passo = Number(passo)
        if (passo == 0) {
            passo = 1
        }

        resposta = inicio

        while (inicio + passo <= fim ) {
            inicio += passo
            resposta += ` 👉 ${inicio}`
        } 

        resposta += ' 🏁'

        var resultado = document.querySelector('section#resultado')
        resultado.innerHTML = resposta
    }
}
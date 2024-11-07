function contando() {
    var inicio = Number(document.querySelector('input#idinicio').value)
    var fim = Number(document.querySelector('input#idfim').value)
    var passo = Number(document.querySelector('input#idpasso').value)

    var c = 0

    while (inicio <= fim) {
        inicio += passo
        c++
    }
    
    var resultados = document.querySelector('section#resultados')
    resultados.innerHTML = `${c}`
}
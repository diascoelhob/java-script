function contando() {
    var inicio = Number(document.querySelector('input#idinicio').value)
    var fim = Number(document.querySelector('input#idfim').value)
    var passo = Number(document.querySelector('input#idpasso').value)
    
    var resultados = document.querySelector('section#resultados')
    resultados.innerHTML = `${inicio} `
}
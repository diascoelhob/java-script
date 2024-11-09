function tabuada() {
    var numero = document.querySelector('input#idnumero').value

    saida = ''
    c = 1
    while (c < 10) {
        resultado = numero * c
        saida += `<li> ${numero} x ${c} = ${resultado} </li>`
        c += 1
    }

    var tela = document.querySelector('section#saida')

    tela.innerHTML = saida
}
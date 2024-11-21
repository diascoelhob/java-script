/*Definindo variáveis*/
let num = []
let qtd = 0
let maior = -Infinity
let menor = +Infinity
let soma = 0
let media = 0

function cadastrar() {
    let entrada = Number(document.querySelector('input#num').value)

    let saida = document.querySelector('select#saida')

    /*Criando novo elemento HTML*/
    let novo = document.createElement('option')
    novo.textContent = `Valor ${entrada} adicionado.`
    saida.appendChild(novo)

    /*Adicionando um valor ao Array (Vetor) num*/
    num.push(entrada)

    /*Maior Valor*/
    if (num.length == 0) {
        maior = entrada
    } else if (maior < entrada) {
        maior = entrada
    }

    /*Menor Valor*/
    if (num.length == 0) {
        menor = entrada
    } else if (menor > entrada)
        menor = entrada

    /*Somoatório*/
    soma += entrada
}

function analisar() {
    qtd = num.length
    media = soma/qtd

    Quantidade: ${qtd}
    Maior valor: ${maior}
    Menor valor: ${menor}
    Somatório: ${soma}
    Média: ${media}
}

/*
Quantidade de números
O maior valor
O menor valor
Somatório de todos os valores
A média
*/
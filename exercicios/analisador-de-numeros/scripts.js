/*Definindo variáveis*/
let num = []
let qtd = 0
let maior = -Infinity
let menor = +Infinity
let soma = 0
let media = 0

function cadastrar() {
    let entrada = Number(document.querySelector('input#num').value)
    if (entrada < 1 || entrada >= 99) {
        window.alert(`${entrada} - Número invalido.`)
    } else {
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
}

function analisar() {
    qtd = num.length
    media = soma/qtd

    if (qtd == 0) {
        window.alert('Adicione pelo menos um número.')
    } else {
        let resultado = document.querySelector('ul#resultado')
        resultado.innerHTML = `
        <li>Quantidade: ${qtd}</li>
        <li>Maior valor: ${maior}</li>
        <li>Menor valor: ${menor}</li>
        <li>Somatório: ${soma}</li>
        <li>Média: ${media}</li>`

        resultado.style.transform = 'translateY(-114.5px)'

        let main = document.querySelector('main')
        main.style.height = '283.500px'

        let analisar = document.querySelector('button#analisar')
        analisar.style.transform = 'translateY(-114.5px)'
    }  
}
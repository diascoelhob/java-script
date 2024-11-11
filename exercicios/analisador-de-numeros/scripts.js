function adicionar() {
    var num = document.querySelector('input#num').value;
    var saida = document.querySelector('select#saida');
    if (num > 0 && num < 100) {
        var option = document.createElement('option');
        option.text = num;
        saida.appendChild(option)
    } else {
        window.alert('Valor invalido.')
    }
}
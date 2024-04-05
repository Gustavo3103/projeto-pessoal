// Função declarando que se o valor colocado em i1 ou i2 não for um número, irá aparecer uma mensagem de erro.
// Caso contrário, fará as quatro operações básicas com os dois valores.

function funcao() {

    if (isNaN(i1.value) || isNaN(i2.value)) { soma.innerHTML = "Um dos valores colocados não é um número." }
    else {
        soma.innerHTML = i1.value + " + " + i2.value + " = " + (Number(i1.value) + Number(i2.value))
        subtracao.innerHTML = i1.value + " - " + i2.value + " = " + (Number(i1.value) - Number(i2.value))
        multiplicacao.innerHTML = i1.value + " x " + i2.value + " = " + (Number(i1.value) * Number(i2.value))
        divisao.innerHTML = i1.value + " ÷ " + i2.value + " = " + (Number(i1.value) / Number(i2.value))
    }


}


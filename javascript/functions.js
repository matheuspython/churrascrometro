let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let quantidadeTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas)
    let quantidadeTotalCerveja = cervejaPorPessoa(duracao) * adultos
    let quantidadeTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas)


    resultado.innerHTML = `<p>${quantidadeTotalCarne/1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${quantidadeTotalCerveja} ml de Carveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalBebidas/2000)} pet's 2L</p>`
}

function carnePorPessoa(duracao) {
    if (duracao >= 6) { return 650 } else { return 400 }
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) { return 650 } else { return 400 }
}

function bebidasPorPessoa(duracao) {
    if (duracao >= 6) { return 1500 } else { return 1000 }
}
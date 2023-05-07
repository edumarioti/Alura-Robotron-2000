
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {

    elemento.addEventListener("click", (evento) => {
        const operacao = evento.target.dataset.controle
        const controle_peca = evento.target.parentNode
        const peca = evento.target.dataset.peca

        manipulaDados(operacao, controle_peca)

        atualizaEstatisticas(peca)        
    })

})

function manipulaDados(operacao, controle) {

    const contador_peca = controle.querySelector("[data-contador]")

    if (operacao === "-") {

        peca_maior_que_zero = parseInt(contador_peca.value) > 0

        if (peca_maior_que_zero) {
            contador_peca.value = parseInt(contador_peca.value) - 1
        }
    } else if (operacao === "+") {
        contador_peca.value = parseInt(contador_peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {

    estatisticas.forEach ( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })

}
const curtida = document.querySelector('#btn-curtir')
const contadorCurtidas = document.querySelector('#contador')
let qtdCurtidas = 0

curtida.addEventListener('click', function() {
    qtdCurtidas += 1
    contadorCurtidas.textContent = qtdCurtidas
})

const inputTexto = document.querySelector('#campo-texto')
const preview = document.querySelector('#preview-texto')

inputTexto.addEventListener('input', function() {
    preview.textContent = inputTexto.value
})

const caixaCor = document.querySelector('#caixa-cor')

caixaCor.addEventListener('mouseenter', function() {
    caixaCor.style.backgroundColor = 'blue'
})

caixaCor.addEventListener('mouseleave', function() {
    caixaCor.style.backgroundColor = ''
})

const btnReset = document.querySelector('#btn-reset')

btnReset.addEventListener('click', function() {
    qtdCurtidas = 0
    contadorCurtidas.textContent = qtdCurtidas
    
    inputTexto.value = ''
    
    preview.textContent = ''
})
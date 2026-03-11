const tituloNhoque = document.querySelector('#card-nhoque h3')

const botoesCompra = document.querySelectorAll('.bt-pedido')

const terceiroCard = document.querySelector('.card:nth-child(3)')

const nomeCompleto = document.querySelector('#nome')

console.log("1. Mostrando o Título NHOQUE (pelo ID)", tituloNhoque)

console.log("2. Quantidade de botões de pedido:", botoesCompra.length)

console.log("3. A terceira posição da class card: ", terceiroCard)

const imgLasanha = document.querySelector('img[alt="Lasanha à bolonhesa com 4 queijos]')

if (tituloNhoque) {
    console.log("Título CAPTURADO: ", tituloNhoque.innerText)
}

const saudacao = document.querySelector('#boas-vindas')

const agora = new Date()

const hora = agora.getHours()

saudacao.textContent = hora < 18 ? "Bem-vindo! Bom almoço!" : "Bem-vindo! Boa janta!"

nomeCompleto.innerHTML = "<strong>Gabriela</strong> Carnevali Gonçalves <em>Lima</em>"


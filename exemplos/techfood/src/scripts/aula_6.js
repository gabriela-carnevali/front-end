// 1. Selecionamos o elemento (AULA 5)
const btn = document.querySelector(".bt-pedido");

const inputQtdLasanha = document.querySelector('#qtd-lasanha');

const textoPreco = document.querySelector('#preco-lasanha')

if (inputQtdLasanha && textoPreco) {
    inputQtdLasanha.addEventListener("input", () => {
        const precoUnitario = 45.0
        const total = Number(inputQtdLasanha.value) * precoUnitario
        textoPreco.textContent = `R$ ${total.toFixed(2)} `

        textoPreco.style.color = total > 150 ? "#f10808": "#d66e12"
    })
}


// 2. Adicionamos o 'ouvinte' (Evento, Função)
btn.addEventListener("click", function () {
  // LINHA A LINHA: Quando o clique ocorrer, este bloco será executado
  console.log("O vigia detectou um clique no botão");
  btn.textContent = "Processando...";
});

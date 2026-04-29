document.addEventListener("DOMContentLoaded", function () {
  inicializarSubtotal();
  inicializarHoverCards();
  inicializarVitrine();
});

function inicializarSubtotal() {
  // Continua...
}

function inicializarHoverCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "none";
    });
  });
}

function inicializarVitrine() {
  const main = document.querySelector("main");

  if(main) return

  main.addEventListener("click", (event) => {
    const clicado = event.target; // Qual elemento dentro do main clicou (guarda a informação)

    // Adicionar e remover quantidade de itens manipulando o botão
    if (clicado.classList.contains("btn-menos")) {
      const box = clicado.parentElement;
      const spanQtd = box.querySelector(".qtd-valor");
      const valorAtual = Number(spanQtd.textContent);
      spanQtd.textContent = Math.max(1, valorAtual - 1);
      atualizarPrecoCard(box);
      return;
    }

    if (clicado.classList.contains("btn-mais")) {
      const box = clicado.parentElement;
      const spanQtd = box.querySelector(".qtd-valor");
      spanQtd.textContent = Number(spanQtd.textContent) + 1;
      atualizarPrecoCard(box);
      return;
    }

    // Solicitar pedido - item
    if (clicado.classList.contains("btn-pedido")) {
      event.preventDefault();

      const card = clicado.parentElement;
      const nomePrato = card.querySelector("h3").textContent;
      const quantidade = card.querySelector(".qtd-valor").textContent;
      const precoExibido = card.querySelector(".preco").textContent;

      clicado.textContent = "✔️ Adicionado";
      clicado.style.backgroundColor = "#27ae60";
      clicado.disabled = true;

      setTimeout(() => {
        clicado.textContent = "Pedir agora";
        clicado.style.backgroundColor = "";
        clicado.disabled = false;
        const box = card.querySelector(".quantidade-box")
        if(box) {
            const spanQtd = box.querySelector(".qtd-valor")
            if (spanQtd) spanQtd.textContent = "1"
            atualizarPrecoCard(box)
        }
      }, 1500);

      //Continua 
      const badgeExistente = card.querySelector(".bagde-adicionado")

      //Daqui para baixo diferente.

      if (!card.querySelector(".badge-adicionado")) {
        card.insertAdjacentHTML(
          "beforeend",
          "<span class = 'badge-adicionado'> ✔️ No resumo </span>",
        );
      }
      // Função para inserir as informações do prato ao resumo de itens do "carrinho"

      AdicionarItemAoResumo(nomePrato, quantidade, precoExibido, card);
    } // Fechamento btn-pedido
  }); // Fechamento do ouvinte
}

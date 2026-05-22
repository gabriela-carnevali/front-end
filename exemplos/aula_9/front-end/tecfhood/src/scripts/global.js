document.addEventListener("DOMContentLoaded", function () {
  solicitarNomeCliente()
  exibirNomeCliente()
  exibirBoasVindas();
  exibirDataFooter();
  fecharMenuAoNavegar();
});

function solicitarNomeCliente() {
  if(sessionStorage.getItem("techfood_cliente")) return

  const modal = document.getElementById("modal-boas-vindas")

  if(modal) modal.style.display = "flex"

  const btnConfirmar = document.getElementById("btn-confirmar-nome")
  const inputNome = document.getElementById("input-nome-cliente")

  if(!btnConfirmar || !inputNome) return

  btnConfirmar.addEventListener("click", function() {
    const nome = inputNome.value.trim()

    if(!nome) {
      inputNome.focus()
      return
    }

    sessionStorage.setItem("techfood_cliente", nome)
    modal.style.display = "none"
    
    //Depoisde estruturado e registrado o nome eu vou exibir na função abaixo
    exibirNomeCliente()
  })

  inputNome.addEventListener('keydown', function(e){
    if(e.key === 'Enter') btnConfirmar.click()
  })

  setTimeout(function() {
    inputNome.focus()
  }, 100)
}

function exibirNomeCliente() {
  const nome = sessionStorage.getItem("techfood_cliente")
  const elemento = document.querySelector("#boas-vindas")

  if(!elemento) return
  
  const agora = new Date()
  const hora = agora.getHours()
  const saudacao = hora < 12 ? "Bom dia ☀️": hora < 18 ? "Boa tarde 🌅" : "Boa noite 🌙"

  elemento.textContent = nome
  ? `${saudacao}, ${nome}! O que vai pedir hoje?` : `${saudacao}! Qual é o seu pedido?`
}

function exibirBoasVindas() {
  const agora = new Date();
  const hora = agora.getHours();
  const minutos = agora.getMinutes();
  const horaExata = hora + minutos / 60;

  let saudacao;
  if (horaExata >= 5 && horaExata < 12) {
    saudacao = "☀️ Bom dia! Qual o seu pedido?";
  } else if (horaExata >= 12 && horaExata < 18) {
    saudacao = "🌤️ Boa tarde! Confira nosso cardápio.";
  } else {
    saudacao = "🌙 Boa noite! Ainda dá tempo de pedir.";
  }

  const elemSaudacao = document.querySelector("#boas-vindas");
  if (elemSaudacao) elemSaudacao.textContent = saudacao;
}

function exibirDataFooter() {
  const elemFooter = document.querySelector("#data-hora-footer");
  if (!elemFooter) return;

  const agora = new Date();
  const dataFormatada = agora.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  elemFooter.textContent = dataFormatada;
}

function fecharMenuAoNavegar() {
  // Valida se a tela tem um determinado tamanho
  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  if (!isMobile) return;

  const linksMenu = document.querySelectorAll("#menu a");
  linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
      const checkbox = document.querySelector("#bt_menu");
      if (checkbox) checkbox.checked = false;
    });
  });
}

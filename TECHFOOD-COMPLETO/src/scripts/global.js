/* ==========================================================
   GLOBAL.JS — Funções compartilhadas por todas as páginas.
   Este arquivo é carregado antes de qualquer script de página.
   ========================================================== */


// ─────────────────────────────────────────────────────────────────────────────
// Aula de Eventos DOM
// DOMContentLoaded dispara quando o HTML foi completamente lido e montado,
// mas ANTES de imagens e fontes carregarem. É o momento seguro para
// começar a manipular elementos — você tem certeza que eles existem.
// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  exibirBoasVindas();
  exibirDataFooter();
  fecharMenuAoNavegar();
});


// ─────────────────────────────────────────────────────────────────────────────
// Aula de JavaScript | Aula de DOM
// Exibe saudação de acordo com o horário atual.
//
// Por que hora + minutos/60?
// Se você comparar só a hora inteira, 12:45 e 12:01 parecem iguais (ambos = 12).
// Dividindo os minutos por 60 e somando à hora, você tem um número decimal preciso:
// 12:30 → 12 + 30/60 = 12.5 → cai corretamente em "Boa tarde" (>= 12)
// ─────────────────────────────────────────────────────────────────────────────
function exibirBoasVindas() {
  const agora    = new Date();
  const hora     = agora.getHours();
  const minutos  = agora.getMinutes();

  // Valor decimal representa a hora com precisão de minutos
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
  if (elemSaudacao) {
    elemSaudacao.textContent = saudacao;
  }
}


// ─────────────────────────────────────────────────────────────────────────────
// Aula de JavaScript | Aula de DOM
// Exibe a data atual no rodapé de todas as páginas.
// toLocaleDateString com as opções formata em português completo:
// ex: "quinta-feira, 12 de março de 2026"
// class ─────────────────────────────────────────────────────────────────────────────
function exibirDataFooter() {
  const elemFooter = document.querySelector("#data-hora-footer");
  if (!elemFooter) return;

  const agora = new Date();
  const dataFormatada = agora.toLocaleDateString("pt-BR", {
    weekday: "long",
    year:    "numeric",
    month:   "long",
    day:     "numeric"
  });

  elemFooter.textContent = dataFormatada;
}


// ─────────────────────────────────────────────────────────────────────────────
// Aula de Eventos DOM | Aula de Design Responsivo
// No mobile, fecha o menu hamburguer automaticamente ao clicar em um link.
// window.matchMedia verifica se uma media query CSS está ativa no momento —
// a mesma lógica do @media screen and (max-width: 600px) do CSS,
// só que acessível pelo JavaScript.
// ─────────────────────────────────────────────────────────────────────────────
function fecharMenuAoNavegar() {
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
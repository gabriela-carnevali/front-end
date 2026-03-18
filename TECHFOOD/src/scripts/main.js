/* ==========================================================
   MAIN.JS — Lógica da página do Cardápio (index.html)
   Aula 6: Eventos DOM

   ROADMAP DESTE ARQUIVO:
   [✔] Entrega atual  — Saudação, subtotal, hover nos cards, botão pedir
   [ ] Próxima entrega — Integração com cadastro.js (pratos dinâmicos)
   [ ] Depois          — Pedidos com localStorage
   [ ] Futuro          — Substituir localStorage por chamadas à API (back-end)
   ========================================================== */

// ─────────────────────────────────────────────────────────────────────────────
// Aula de Eventos DOM
// DOMContentLoaded: espera o HTML carregar antes de rodar qualquer código.
// Sem isso, o querySelector pode não encontrar os elementos (eles ainda
// não existem no momento em que o script executa).
// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  inicializarSubtotal();
  inicializarBotoesPedido();
  inicializarHoverCards();

  // ── PRÓXIMA ENTREGA: Cadastro de Pratos ────────────────────────────────────
  // Quando o cadastro.js estiver pronto, descomentar a linha abaixo.
  // Ela vai buscar os pratos salvos pelo formulário e exibir no grid dinâmico.
  //
  // renderizarPratosDinamicos();
  // ──────────────────────────────────────────────────────────────────────────
});

// ─────────────────────────────────────────────────────────────────────────────
// Aula de Eventos DOM | Aula de JavaScript
// Escuta o evento "input" no campo de quantidade da lasanha.
// "input" dispara a cada caractere digitado ou seta clicada —
// diferente de "change" que só dispara quando o campo perde o foco.
//
// Por que feedback visual na cor?
// alert() é bloqueante — trava a página inteira até o usuário clicar OK.
// Mudar a cor diretamente no elemento é instantâneo, não interrompe o fluxo
// e é o padrão usado em produção.
// ─────────────────────────────────────────────────────────────────────────────
function inicializarSubtotal() {
  const inputQtd = document.querySelector("#qtd-lasanha");
  const precoTexto = document.querySelector("#preco-lasanha");
  const subTexto = document.querySelector("#sub-lasanha");

  if (!inputQtd || !precoTexto) return;

  inputQtd.addEventListener("input", function () {
    const precoUnitario = 45.0;
    const quantidade = Number(inputQtd.value);

    // Garante que não vai multiplicar por número inválido
    if (isNaN(quantidade) || quantidade < 1) return;

    const total = quantidade * precoUnitario;
    precoTexto.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;

    // Feedback visual de cor: vermelho quando o valor fica alto
    precoTexto.style.color = total > 150 ? "#c0392b" : "#e67e22";

    // Exibe o subtotal detalhado (ex: "3x R$ 45,00")
    if (subTexto) {
      subTexto.textContent =
        quantidade > 1
          ? `${quantidade}x R$ ${precoUnitario.toFixed(2).replace(".", ",")}`
          : "";
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Aula de Eventos DOM | Aula de DOM
// querySelectorAll retorna TODOS os elementos com a classe .btn-pedido.
// forEach percorre cada um deles e adiciona o evento individualmente.
//
// event.preventDefault() evita qualquer comportamento padrão do navegador
// (ex: botão dentro de form enviaria o formulário — aqui não tem form,
// mas é boa prática manter).
//
// getAttribute("data-nome"): lê o valor do atributo data-nome que colocamos
// diretamente no HTML. Assim cada botão "sabe" qual prato representa
// sem precisar olhar para o elemento h3 irmão.
//
// Por que feedback visual em vez de alert()?
// alert() trava a página inteira e não pode ser estilizado.
// Mudar textContent e backgroundColor do próprio botão é mais profissional,
// não interrompe o usuário e pode ser personalizado com CSS.
// setTimeout desfaz a mudança depois de 1.5s, voltando ao estado original.
// ─────────────────────────────────────────────────────────────────────────────
function inicializarBotoesPedido() {
  const botoes = document.querySelectorAll(".btn-pedido");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function (event) {
      event.preventDefault();

      // Lê as informações do prato direto dos atributos data-* do botão
      const nomePrato = botao.getAttribute("data-nome");

      // Feedback visual: muda o botão clicado para verde com confirmação
      botao.textContent = "✓ Adicionado!";
      botao.style.backgroundColor = "#27ae60";
      botao.disabled = true;

      // setTimeout(função, milissegundos): executa a função após o tempo.
      // Aqui desfaz o feedback depois de 1500ms (1.5 segundos).
      setTimeout(function () {
        botao.textContent = "Pedir Agora";
        botao.style.backgroundColor = "";
        botao.disabled = false;
      }, 1500);

      // ── PRÓXIMA ENTREGA: Pedidos com localStorage ──────────────────────────
      // Quando a página de pedidos for implementada, descomentar abaixo.
      // Vai salvar o pedido no localStorage para aparecer em pedidos.html.
      //
      // const preco = parseFloat(botao.getAttribute("data-preco"));
      // const idQtd = botao.getAttribute("data-id");
      // const qtd   = idQtd ? Number(document.querySelector("#" + idQtd).value) : 1;
      // salvarPedido({ nome: nomePrato, preco: preco, qtd: qtd });
      // ──────────────────────────────────────────────────────────────────────
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Aula de Eventos DOM
// mouseenter e mouseleave: eventos de mouse que NÃO propagam para filhos.
// (diferente de mouseover/mouseout que disparam também nos elementos internos)
//
// Por que mesclar com o CSS hover?
// O CSS :hover cuida da aparência visual (transform, box-shadow) pois é
// mais performático — o navegador otimiza animações CSS nativamente.
// O JS cuida do comportamento (aqui poderia registrar analytics, por exemplo).
// Cada um fazendo o que faz melhor: CSS = aparência, JS = comportamento.
//
// NOTA: O efeito visual de elevação do card já está no CSS (:hover no style.css).
// Este bloco JS é mantido para os alunos aprenderem mouseenter/mouseleave,
// mas em produção o CSS sozinho seria suficiente para o visual.
// ─────────────────────────────────────────────────────────────────────────────
function inicializarHoverCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      // Aqui poderíamos fazer algo de lógica, como pré-carregar dados,
      // registrar que o usuário passou o mouse etc.
      // O visual (subir e sombra) já é feito pelo CSS :hover.
    });

    card.addEventListener("mouseleave", function () {
      // Qualquer limpeza de estado ao sair do card viria aqui.
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// PRÓXIMA ENTREGA — Cadastro de Pratos (descomentar quando chegar a aula)
// ─────────────────────────────────────────────────────────────────────────────
//
// function renderizarPratosDinamicos() {
//   const grid = document.querySelector("#grid-dinamico");
//   if (!grid) return;
//
//   // Lê os pratos salvos pelo formulário de cadastro
//   const pratos = JSON.parse(localStorage.getItem("techfood_pratos") || "[]");
//
//   if (pratos.length === 0) {
//     grid.innerHTML = "<p style='text-align:center;color:#aaa;grid-column:1/-1'>Nenhum prato cadastrado.</p>";
//     return;
//   }
//
//   pratos.forEach(function (prato) {
//     const card = document.createElement("article");
//     card.setAttribute("class", "card card-animado");
//     card.innerHTML = `
//       <h3>${prato.nome}</h3>
//       <p class="desc">${prato.descricao}</p>
//       <span class="preco">R$ ${parseFloat(prato.preco).toFixed(2).replace(".", ",")}</span>
//       <button class="btn-pedido" data-nome="${prato.nome}" data-preco="${prato.preco}">Pedir Agora</button>
//     `;
//     grid.appendChild(card);
//   });
//
//   // Reaplica o evento de clique nos botões recém criados
//   inicializarBotoesPedido();
// }

// ─────────────────────────────────────────────────────────────────────────────
// PRÓXIMA ENTREGA — Pedidos com localStorage (descomentar na aula de Pedidos)
// ─────────────────────────────────────────────────────────────────────────────
//
// function salvarPedido(pedido) {
//   const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");
//   pedido.subtotal = pedido.preco * pedido.qtd;
//   lista.push(pedido);
//   localStorage.setItem("techfood_pedidos", JSON.stringify(lista));
// }

// ─────────────────────────────────────────────────────────────────────────────
// FUTURO — Integração com Back-end (substituir localStorage por API)
//
// Quando o back-end estiver pronto, o localStorage vai dar lugar a chamadas
// fetch() para uma API REST. A estrutura do código permanece igual —
// só muda de onde os dados vêm e para onde vão.
//
// EXEMPLO de como ficará salvarPedido() com back-end:
//
// async function salvarPedido(pedido) {
//   const resposta = await fetch("https://api.techfood.com/pedidos", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(pedido)
//   });
//   const dados = await resposta.json();
//   console.log("Pedido salvo:", dados);
// }
// ──────────────────────────────────
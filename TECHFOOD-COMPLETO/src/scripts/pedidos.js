/* ==========================================================
   PEDIDOS.JS — Lógica da página de Pedidos (pedidos.html)

   ROADMAP DESTE ARQUIVO:
   [ ] Depois          — Ler pedidos do localStorage e exibir na lista
   [ ] Depois          — Calcular e exibir o total geral
   [ ] Depois          — Limpar todos os pedidos
   [ ] Futuro          — Substituir localStorage por chamadas à API (back-end)
   ========================================================== */


// ─────────────────────────────────────────────────────────────────────────────
// DEPOIS — Descomentar este bloco na aula de Pedidos
// ─────────────────────────────────────────────────────────────────────────────
//
document.addEventListener("DOMContentLoaded", function () {
  renderizarPedidos();
  configurarLimparPedidos();
});
//
//
// // ── Lê os pedidos e exibe na lista ───────────────────────────────────────────
function renderizarPedidos() {
  const lista          = document.querySelector("#lista-pedidos");
  const spanTotal      = document.querySelector("#valor-total");
  const spanResumo     = document.querySelector("#valor-total-resumo");
  const spanContador   = document.querySelector("#contador-itens");
  if (!lista) return;

  const pedidos = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");

  if (pedidos.length === 0) {
    lista.innerHTML = "<li class='pedido-vazio'>Nenhum pedido ainda. Acesse o <a href='index.html'>Cardápio</a> para adicionar! 😊</li>";
    return;
  }

  lista.innerHTML = "";
  let total = 0;

  pedidos.forEach(function (pedido) {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${pedido.nome}</strong>
      — ${pedido.qtd}x R$ ${pedido.preco.toFixed(2).replace(".", ",")}
      = <span style="color:#e67e22;font-weight:bold">
          R$ ${pedido.subtotal.toFixed(2).replace(".", ",")}
        </span>
    `;
    lista.appendChild(li);
    total += pedido.subtotal;
  });

  const totalFmt = `R$ ${total.toFixed(2).replace(".", ",")}`;
  if (spanTotal)    spanTotal.textContent  = totalFmt;
  if (spanResumo)   spanResumo.textContent = totalFmt;

  const totalItens = pedidos.reduce(function (acc, p) { return acc + p.qtd; }, 0);
  if (spanContador) spanContador.textContent = totalItens + (totalItens === 1 ? " item" : " itens");
}


// ── Limpa todos os pedidos do localStorage ────────────────────────────────────
function configurarLimparPedidos() {
  const btn = document.querySelector("#btn-limpar-pedidos");
  if (!btn) return;

  btn.addEventListener("click", function () {
    localStorage.removeItem("techfood_pedidos");
    renderizarPedidos();
  });
}


// ─────────────────────────────────────────────────────────────────────────────
// FUTURO — Integração com Back-end
//
function renderizarPedidos() {
  fetch("https://api.techfood.com/pedidos")
    .then(res => res.json())
    .then(pedidos => {
      // mesma lógica de exibição acima, mas os dados vêm da API
    })
    .catch(err => console.error("Erro ao buscar pedidos:", err));
}
// ─────────────────────────────────────────
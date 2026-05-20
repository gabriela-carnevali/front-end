const btnLimpar = document.querySelector("#btn-limpar")

if (btnLimpar) {
  btnLimpar.addEventListener("click", () => {
    const listaResumo = document.querySelector("#lista-resumo")
    const secaoResumo = document.querySelector("#secao-resumo")

    document.querySelector("#badge-adicionado").forEach((excluir) => excluir.remove())

    while(listaResumo.firstElementChild) {
      listaResumo.firstElementChild.remove()

      secaoResumo.sytle.display = "none"
    }
  })
}
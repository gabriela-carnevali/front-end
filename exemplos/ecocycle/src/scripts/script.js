/* ==========================================================
   AULA 06: EVENTOS DOM - PROJETO ECOCYCLE
   ========================================================== */

// 1. SIMULADOR DE ÁGUA (Evento 'input' para cálculo em tempo real)
const inputPapel = document.querySelector("#input-papel");
const resultadoAgua = document.querySelector("#txt-resultado strong");

if (inputPapel && resultadoAgua) {
  inputPapel.addEventListener("input", () => {
    // Conversão do valor digitado para número
    const kg = Number(inputPapel.value);

    // Regra de negócio: 1kg de papel reciclado poupa cerca de 10L de água
    const totalAgua = kg * 10;

    // Atualiza o ecrã com o resultado
    resultadoAgua.textContent = totalAgua;
  });
}

// 2. CONTROLO DO VÍDEO (Evento 'click' isolado)
const btnVideo = document.querySelector("#btn-video");
const thumbnail = document.querySelector("#thumb-video");

if (btnVideo && thumbnail) {
  btnVideo.addEventListener("click", (event) => {
    event.preventDefault(); // Evita o comportamento padrão do botão

    // Oculta a imagem (z-index 2) revelando o iframe do YouTube por trás
    thumbnail.style.display = "none";

    // Altera o texto do botão para feedback visual
    btnVideo.textContent = "A reproduzir...";
    btnVideo.style.backgroundColor = "#555";
    btnVideo.disabled = true;
  });
}

// 3. EFEITOS VISUAIS NOS BOTÕES DE LEITURA (Eventos 'mouseover' / 'mouseout')
const todosBotoes = document.querySelectorAll(".btn-leitura");

todosBotoes.forEach((botao) => {
  // Apenas aplica o efeito hover se não for o botão do vídeo (que fica cinzento ao clicar)
  if (botao.id !== "btn-video") {
    botao.addEventListener("mouseover", () => {
      botao.style.backgroundColor = "#27ae60"; // Verde mais claro/vibrante
      botao.style.transform = "scale(1.05)";
    });

    botao.addEventListener("mouseout", () => {
      botao.style.backgroundColor = "#1b5e20"; // Volta ao verde original
      botao.style.transform = "scale(1)";
    });

    // Alerta de leitura em todos os outros botões
    botao.addEventListener("click", (event) => {
      event.preventDefault();
      alert("A redirecionar para o artigo completo...");
    });
  }
});

/* ==========================================================
   AULA 5: DOM - SELEÇÃO E MANIPULAÇÃO ESTÁTICA (ECOCYCLE)
   ========================================================== */

// 1. HIERARQUIA GLOBAL (Slide 2)
// ONDE: Verificar metadados ou informações do navegador.
// POR QUE: Para entender que o 'document' é apenas uma parte da janela ('window').
console.log("Largura da Janela do Aluno:", window.innerWidth);
console.log("Título atual da aba:", document.title);


// 2. SELETORES "OLD SCHOOL" (Slide 3)
// ONDE: Quando o elemento possui um ID único e queremos busca direta.
const tituloPortal = document.getElementById('titulo-portal');


// 3. SELETORES "NEW SCHOOL" - querySelector (Slides 4, 5 e 6)
// ONDE: O padrão moderno. Permite usar qualquer regra de CSS.

// A) Seleção Simples (ID e Classe)
const cardDestaque = document.querySelector('#card-destaque'); // ID (#)
const primeiroBotao = document.querySelector('.btn-leitura');  // Classe (.)

// B) Seleção por Hierarquia (Pai > Filho)
// ONDE: Busca o h2 que está especificamente dentro do card de ID 'card-destaque'.
const tituloNoticiaDestaque = document.querySelector('#card-destaque h2');

// C) Seleção por Posição (Pseudo-classes)
// ONDE: Busca o segundo card de notícia da lista.
const segundoCard = document.querySelector('.card-noticia:nth-of-type(2)');

// D) Seleção por Atributo
// ONDE: Busca a imagem pelo texto alternativo (alt).
const imgThumbnail = document.querySelector('img[alt="Thumbnail de Energia"]');


// 4. SELETORES DE COLEÇÃO (Slide 7)
// querySelectorAll: Captura todos os itens de uma vez e gera uma lista (NodeList).
const todosOsBotoes = document.querySelectorAll('.btn-leitura');
console.log("Total de notícias no portal:", todosOsBotoes.length);


// 5. MANIPULAÇÃO DE CONTEÚDO (Slide 8)
// textContent: Altera o texto de forma segura.
tituloPortal.textContent = "EcoCycle - Portal de Sustentabilidade";


// 6. MANIPULAÇÃO DE ATRIBUTOS (VERSÃO MODERNA) (Slide 11)
// ONDE: Trocar imagens, links ou acessibilidade.
// POR QUE: Acesso direto à propriedade é mais rápido e legível que setAttribute.

// Mudando o Alt (Acessibilidade)
imgThumbnail.alt = "Capa do vídeo sobre Energia Solar"; 

// Mudando o Título (Balão ao passar o mouse)
imgThumbnail.title = "Clique no botão 'Assistir' abaixo";

// 7. MANIPULAÇÃO DE ESTILO - MÉTODO "CRU" (.style) (Slide 13)
// ONDE USAR: Mudanças rápidas e pontuais (Estilo Inline).
tituloPortal.style.color = "#81c784"; 
tituloPortal.style.letterSpacing = "2px";


/* ==========================================================
   LÓGICA DA AULA 4 APLICADA AO DOM (FUNÇÃO DE CLIQUE)
   ========================================================== */

// Esta função é chamada pelo 'onclick' no HTML do botão Assistir
function verVideo() {
    const thumb = document.querySelector('#thumb-video');
    
    // ONDE: Escondemos a imagem para revelar o iframe que está no fundo (z-index 1)
    // POR QUE: Resolve o Erro 153 do YouTube que acontece por sobreposição.
    thumb.style.display = "none";
    
    console.log("Ação: Usuário clicou em assistir. Thumbnail removida via DOM.");
}

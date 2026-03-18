// Mudando nome usuário para o nome completo 

const nome_completo = document.querySelector('#nome-usuario')

nome_completo.textContent = "Gabriela Carnevali Gonçalves Lima"

// Trocando foto para URL de imagem real 

const fotoAntiga = document.querySelector('#foto-perfil')

fotoAntiga.src = 'https://lh3.googleusercontent.com/NI7kbkUjyXtlA_l47jrrY0nkV16kCE4IG05kThNS9gojGki0XklMgL-xhZjicdR7Rh3vEczxLoyCZjlstUqzXqum4es=s172'

// Alterando a cor de fundo do container perfil

const fundoPerfil = document.querySelector('#container-perfil')

fundoPerfil.style.backgroundColor = "#a1ace0"

// Adicionar a classe .online ao ID #badge-status e mudar o texto para status-ativo

const status_real = document.querySelector('.online')

status_real.textContent = "Status: Ativo"

// Usando querySelectorAll para contar quantidade de skills do usuário e exibindo total no console

const qtd_skills = document.querySelectorAll('.skill')

console.log("Quantidade de skills do usuário: ", qtd_skills.length)
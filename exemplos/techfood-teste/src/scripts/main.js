console.log(window.location.href);

//H1 da página
const titulo = document.getElementById("titulo-site");

// Parágrafo de saudação de boas-vindas
const saudacao = document.querySelector("#boas-vindas");

// Foto da lasanha
const fotoPrato1 = document.querySelector("#foto-destaque");

// Card da lasanha 
const cardLasanha = document.querySelector("#card-lasanha");


const agora = new Date()
const hora = agora.getHours()

if (hora >= 1 && hora <12) {
    saudacao.textContent = "Bom dia!"
}

else if (hora >= 12 && hora < 18) {
    saudacao.textContent = "Boa tarde!"
}

else if (hora >= 18 && hora < 24) {
    saudacao.textContent = "Boa noite!"
}

else {
    saudacao.textContent = "Hora do seu computador está com erro!"
}

fotoPrato1.alt = "Destaque do dia: Lasanha à bolonhesa deliciosa!"

titulo.style.color = "#FF5C00"

cardLasanha.classList.add('em-promocao')
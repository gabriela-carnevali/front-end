//Interação (Clique): Ao clicar no botão "Curtir", incremente o número no contador de curtidas.
const curtida = document.querySelector('#btn-curtir')
const contadorCurtidas = document.querySelector('#contador')
let qtdCurtidas = 0

curtida.addEventListener('click', function() {

    qtdCurtidas +=1

    contadorCurtidas.textContent = `${qtdCurtidas}` 
})

//Monitoramento (Input): Sempre que o usuário digitar no campo de texto, o parágrafo de "Preview" deve mostrar o texto em tempo real.


//Sensores (Mouse): Ao entrar com o mouse na caixa de cor, mude-a para azul. Ao sair, ela deve voltar à cor original.


//Desafio Extra (Reset): Crie um botão (ou use uma tecla) que limpe o input e zera o contador ao mesmo tempo.
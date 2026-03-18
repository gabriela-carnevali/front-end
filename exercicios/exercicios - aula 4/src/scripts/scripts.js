// EXERCÍCIO 1: Personalizador de Acesso (Strings e Interação)
// Crie um script que pergunte o nome do usuário e o seu sobrenome em dois prompt diferentes
// - O sistema deve juntar os nomes (concatenar)
// - Deve remover espaços extras das pontas (usando .trim())
// - Deve exibir um alerta com o nome completo em letras minúsculas e outro alerta informando quantos caracteres o nome possui (usando .length)

const nome = prompt ("Digite seu nome: ")
const sobrenome = prompt ("Digite seu sobrenome: ")

const concatenar = nome.trim().toLocaleLowerCase() + " " + sobrenome.trim().toLocaleLowerCase()

alert ("Seu nome completo é: " + concatenar)

alert ("O número de caracteres do seu nome é: " + concatenar.length)


// EXERCÍCIO 2: Calculadora de Divisão de Conta (Aritméticos)
// Três amigos foram jantar, crie um script que:
// - Peça o valor total da conta
// - Peça a quantidade de pessoas na mesa
// - Calcule quanto cada um deve pagar
// - Exiba o resultado em um alert com a frase: "Cada amigo deve pagar $[VALOR]", formatando o número para 2 casas decimais

const totalConta = prompt ("Digite o valor total da conta: ")
const pessoas = prompt ("Digite a quantidade de pessoas na mesa: ")

pagar = totalConta / pessoas

alert (`Cada amigo deve pagar: $${pagar.toFixed(2)}`)


//EXERCÍCIO 3: Validador de Promoção (Lógicos e Relacionais)
// Uma loja dá frete grátis se o valor da compra for maior que R$150,00 OU se o cliente tiver um cupom de desconto.
// - Peça o valor da compra
// - Pergunte se ele tem cupom (o usuário deve digitar "sim" ou "não")
// - Use uma estrutura condicional (if) com o operador lógico || para verificar se ele ganhou o frete 
// - Exiba "Frete Grátis Liberado" ou "Frete Pago" no console.

const valorCompra = prompt ("Digite o valor da compra: ")
const cupom = prompt ("Responda sim ou não: você possui cupom?")

if (valorCompra >= 150 || cupom.toLowerCase() === "sim") {
    console.log("Frete Grátis Liberado")
} else {
    console.log("Frete Pago")
}


//EXCERCÍCIO 4: Sorteador de Brindes (math)
// Crie um script que simule um sorteio de loteria simples
// - O usuário deve escolher um número de 1 a 10
// - O sistema deve gerar um número aleatório inteiro entre 1 e 10
// - Se o número do usuário for igual ao do sistema, exiba "Parabéns, você ganhou um brinde!". Caso contrário, exiba "Que pena, o número sorteado foi [NÚMERO]"

const num = prompt("Escolha um número de 1 a 10: ")
const numeroSorteado = Math.random()*10

if (num == numeroSorteado) {
    alert ("Parabéns, você ganhou um brinde!")
} else {
    alert (`Que pena, o número sorteado foi: ${numeroSorteado.toFixed(0)}`)
}


// EXERCÍCIO 5: Gestão de Frota (Orientação a Objetos)
// Crie uma classe chamada Veiculo
// - Ela deve ter os atributos: modelo, marca e ano
// - Ela deve ter um método chamado idadeVeiculo que recebe o ano atual (via DATE()) e calcula quantos anos o carro tem
// - Instancie um objeto (ex: Corolla 2020), traga o ano atual (via DATE()) e exiba no alert o modelo do carro e a idade dele calculada pelo método


class Veiculo {
    constructor (modelo, marca, ano) {
        this.modelo = modelo
        this.marca = marca
        this.ano = ano
    }

    idadeVeiculo (anoAtual) {
        const idade = anoAtual - this.ano 
        return idade 
    }
}

const veiculo1 = new Veiculo ("Corolla", "Toyota", 2020)

const data = new Date()
const anoAtual = data.getFullYear()

alert (`O modelo do carro é ${this.modelo} e sua idade é ${veiculo1.idadeVeiculo(anoAtual)}`)

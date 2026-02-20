const tempoAgora = new Date()

const hora = tempoAgora.getHours()

const dataFormatada = tempoAgora.toLocaleDateString('pt-BR')

const horaFormatada = tempoAgora.toLocaleTimeString('pt-BR')

console.log(`Hoje é dia: ` + dataFormatada)
console.log("Agora são: " + horaFormatada)

console.log("Só a hora: " + hora)

if (hora > 12 && hora < 18) {
    alert("Boa tarde")
}
else if (hora >= 18 && hora < 6) {
    alert("Boa Noite")
}
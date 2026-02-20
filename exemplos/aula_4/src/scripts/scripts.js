const tempoAgora = new Date()

const hora = tempoAgora.getHours()

const dataFormatada = tempoAgora.toLocaleDateString('pt-BR')

const horaFormatada = tempoAgora.toLocaleTimeString('pt-BR')

console.log(`Hoje é dia: ` + dataFormatada)
console.log("Agora são: " + horaFormatada)

console.log("Só a hora: " + hora)
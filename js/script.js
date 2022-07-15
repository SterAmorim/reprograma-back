function calcularValorHora(){
const ganho = document.querySelector('#ganho-mes')
const horas = document.querySelector('#horas-dia')
const valorHora = ganho.value / (22 = horas.value)

const resposta = document.querySelector ('#resposta')
resposta.innerHTML = 'R$ ' + valorHora.toFixed(2)
}
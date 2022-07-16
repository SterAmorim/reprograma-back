function calcular() {

    const valorHora = document.getElementById('valor-hora');
    const horasProjeto = document.getElementById('horas-projeto');
    var resposta = document.getElementById('resposta');

    const calculo = valorHora.value * horasProjeto.value;

    var calculoFormatado = 'R$ ' + calculo.toFixed(2).replace('.',',');

    resposta.textContent = calculoFormatado;

}
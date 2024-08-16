window.onload = function() {
    document.addEventListener('deviceready', inicio, false);
}

function inicio() {
    var botao = document.getElementById('botao');
    botao.addEventListener('click', apertou);
}

function apertou() {
    var numeroCerto = 7;

    var campoSaida = document.getElementById('saida');

    var campoNumero = document.getElementById('numero');
    var digitado = campoNumero.value;

    if(digitado == numeroCerto) {
        campoSaida.innerHTML = 'Acertou!';
    } else {
        if(digitado > numeroCerto) {
            campoSaida.innerHTML = 'Digite um número menor!';
        } else {
            campoSaida.innerHTML = 'Digite um número maior!';
        }
    }
}
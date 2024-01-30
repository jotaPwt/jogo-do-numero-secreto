let listaDeNumerosSorteados = [];
let = numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número Secreto');
    exibirTextoNaTela('p', 'Escolha um Número de 1 e 10');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector ('input').value
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    let mensagemTentativa = (`voce descobriu o numero secreto, com ${tentativas} ${palavraTentativa}`)
        exibirTextoNaTela ('h1', 'você acertou!')
        exibirTextoNaTela ('p', mensagemTentativa);
        document.getElementById ('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'o número secreto é menor');
        } else {
            exibirTextoNaTela ('p', 'o número secreto é maior');
        }
        tentativas++
        limparCampo()
    }
 }

function gerarNumeroAleatorio() {
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log (listaDeNumerosSorteados)
        return numeroEscolhido
    }
}


    

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}



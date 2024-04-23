let numerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2}); 
}   

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Número MÁGICO");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 100");
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? "tentativas!" : "tentativa! UM GÊNIO!!!";
        exibirTextoNaTela("h1", "Acertou Miseravi");
        exibirTextoNaTela("p", `Você é mutcho inteligenti, acertou com ${tentativas} ${palavraTentativa}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("h1", "Errrrou")
            exibirTextoNaTela("p", `O número mágico é menor que ${chute}`);
            
        } else {
            exibirTextoNaTela("h1", "Errrrou")
            exibirTextoNaTela("p", `O número mágico é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 100 + 1);
    let quantidadesElementosLista = numerosSorteados.length;    

    if (quantidadesElementosLista == 100) {
        numerosSorteados = [];
    }
    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log (numerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true)

}

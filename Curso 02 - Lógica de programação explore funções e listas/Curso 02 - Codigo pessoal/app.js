let listaNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
configInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function configInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto!");
    exibirTextoNaTela("p", "Escolha de 1 a 100");
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    campoVazio();
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Você acertou!");
        let mensagemTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagem = `Parabêns, você acertou o número secreto com ${tentativas} ${mensagemTentativa}!`;
        exibirTextoNaTela("p", mensagem);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        chute > numeroSecreto ? exibirTextoNaTela("p", "O número secreto é menor") : exibirTextoNaTela("p", "O número secreto é maior");
        tentativas++;
        campoVazio();
    }
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * 100 + 1);
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }


}

function campoVazio(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    configInicial(); 
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
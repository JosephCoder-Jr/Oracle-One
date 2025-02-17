alert("Boas vindas ao nosso jogo!");
let numInicial = 1;
let numFinal = 100;
let numSecret = parseInt(Math.random() * numFinal + 1); 
console.log(` valor do numero secreto = ${numSecret}`); // Console ferramenta do dev
let chute;
let tentativas = 1;

// Enquanto o chute não for igual ao numero secreto
// != diferente 
while (chute != numSecret){
    chute = prompt(`Escolha um numero entre ${numInicial} a ${numFinal}`);
    // Se chute for igual ao numero secreto
    if (chute == numSecret) {
        break; // Serve para parar o comando, para nessa linha!
    } else{
        if (chute > numSecret){
            alert(`O numero secreto é menor que ${chute}`);
        } else{
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++; //variavel++ incrementação +1
    }
}
let palavraTentativa = tentativas > 1 ? "tentativas." : "tentativa."; //Operador ternário = variavel + operador logico + referencia + ? Caso verdadeiro : Caso falso
alert(`Parabens voce acertou o numero secreto ${numSecret} com ${tentativas} ${palavraTentativa}`); //Template Strings ${variavel} ou + variavel
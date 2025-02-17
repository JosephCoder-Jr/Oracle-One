let peso = parseInt(prompt("Digite seu peso"));
let altura = parseFloat(prompt("Digite sua altura"));
let imc;
let titulo;
let mensagemImc;
function calculoImc(p, a){
    return imc = p / a**2;
}
calculoImc(peso, altura);

function tipoImc(imc){
    if (imc > 40){
        mensagemImc = "obesidade grave";
    } else{
        if (imc > 30){
            mensagemImc = "obesidade";
        } else{
            if (imc > 25){
                mensagemImc = "sobrepeso";
            } else{
                if (imc > 18.5){
                    mensagemImc = "normal";
                } else{
                    mensagemImc = "abaixo do peso";
                }
            }
        }
    }
}

tipoImc(imc);
titulo = document.querySelector("h1");
titulo.innerHTML = `Seu IMC é ${imc} e você está com ${mensagemImc}`;
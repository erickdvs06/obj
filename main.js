//let titulo = document.querySelector(h1);
//let titulo = document.getElementsByTagName("h1");
//titulo.style.color = "blue";

const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".conteudo");
for (let i=0; i<botoes.length; i++) {
    botoes[i].onclick = function() {
        for( let j=0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo");

        }
        
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")

    }

}

const contadores = document.querySelectorAll(".contador");
const tempoObj1 = new Date("2024-10-05T00:00:00");
let tempoAtual = new Date();
let tempoFinal = tempoObj1 - tempoAtual;

let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);

segundos %= 60;
minutos %= 60;
horas %= 24;

contadores[0].textContent = dias + "dias " + horas + "horas " + minutos + "minutos " + segundos + "segundos ";  

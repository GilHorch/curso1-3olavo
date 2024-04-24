const botoes = document.querySelectorAll(".botao");//variável que armazena todos os itens com a classe botão
const textos = document.querySelectorAll(".aba-conteudo");//variável que armazena todos os itens com a classe aba-conteudo

for (let i = 0; i < botoes.length; i++) {// loop que executa enquanto i<quantidade de botoes

    botoes[i].onclick = function () { //cria uma função 

        for (let j = 0; j < botoes.length; j++) { // loop que executa enquanto j<quantidade de botoes
            botoes[j].classList.remove("ativo");  //remove a palavra ativo da classe.
            textos[j].classList.remove("ativo");  //remove a palavra ativo da classe.
        }
        botoes[i].classList.add("ativo");//adiciona a palavra ativo da classe.
        textos[i].classList.add("ativo");//adiciona a palavra ativo da classe.
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
const tempoObjetivo2 = new Date("2024-10-05T00:00:00");
const tempoObjetivo3 = new Date("2024-10-05T00:00:00");
const tempoObjetivo4 = new Date("2024-10-05T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

for (let x = 0; x < contadores.length; x++) {
    contadores[x].textContent = calculaTempo(tempos[x]);
}
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0) { return [dias, horas, minutos, segundos]; }
    else { return [0, 0, 0, 0]; }
}
function atualizaCronometro() {
    document.getElementById("dias0").calculaTempo(tempo[0])[0];
    document.getElementById("horas0").calculaTempo(tempo[0])[1];
    document.getElementById("minutos0").calculaTempo(tempo[0])[2];
    document.getElementById("segundo0").calculaTempo(tempo[0])[2];

    for (let y = o; y < contadores.length; y++) {
        //contadores[y].textContent = calculaTempo(tempos[y]);
    }
}
function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}
comecaCronometro();

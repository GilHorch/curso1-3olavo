const botoes = document.querySelectorAll(".botao");//variável que armazena todos os itens com a classe botão
const textos = document.querySelectorAll(".aba-conteudo");//variável que armazena todos os itens com a classe aba-conteudo

for (let i = 0; i < botoes.length; i++) {// loop que executa enquanto i<quantidade de botoes

    botoes[i].onclick = function () {//cria uma função 

        for (let j = 0; j < botoes.length; j++) { // loop que executa enquanto j<quantidade de botoes
            botoes[j].classList.remove("ativo");  //remove a palavra ativo da classe.
            textos[j].classList.remove("ativo");  //remove a palavra ativo da classe.
        }
        botoes[i].classList.add("ativo");//adiciona a palavra ativo da classe.
        textos[i].classList.add("ativo");//adiciona a palavra ativo da classe.
    }

}
const contadores = document.querySelectorAll(".contador");

const tempoObjetivo1 = new Date("24-10-06T00:00:00");

contadores[0].textContent = calculaTempo(tempoObjetivo1);

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
 
 return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}

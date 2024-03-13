const botoes = document.querySelectorAll(".botao");


for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        botoes[i].classList.add("ativo");
    }
    console.log();
}


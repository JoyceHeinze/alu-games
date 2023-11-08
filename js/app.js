let botoes = document.querySelectorAll(".dashboard__item__button");
let imagens = document.querySelectorAll(".dashboard__item__img");

for (i = 0; i < botoes.length; i++) {
    let botao = botoes[i];
    let imagem = imagens[i];    
    botao.addEventListener("click", function() {
        botao.classList.toggle("dashboard__item__button--return");
        if (botao.classList.contains("dashboard__item__button--return")) {
            botao.textContent = "Devolver";
            imagem.classList.add("dashboard__item__img--rented");
        } else {
            botao.textContent = "Alugar";
            imagem.classList.remove("dashboard__item__img--rented");
        }
    })
}
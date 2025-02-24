let imagemCopo = document.querySelector(".conteudo-imagem-copo");
let circulo = document.querySelector(".circulo");

function trocaImagem(endereco) {
    imagemCopo.src = endereco;
};

function trocaCorCirculo(cor) {
    circulo.style.background = cor;
};
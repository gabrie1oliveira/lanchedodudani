const botao03 = document.querySelector('[id=" botao03"]');
const paragrafo03 = document.getElementById("texto03");

botao03.addEventListener("click", function () {
    paragrafo03.textContent = "O texto mudou!";
});
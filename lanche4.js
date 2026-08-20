const botao04 = document.querySelector('[id=" botao04"]');
const pr04 = document.getElementById("texto04");

botao04.addEventListener("click", function () {
    if (pr04.style.display === "none") {
        pr04.style.display = "block";
    } else {
        pr04.style.display = "none";
    }
});
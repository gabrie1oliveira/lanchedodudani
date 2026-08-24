let contador = 0;
const botao05 = document.getElementById("contador");
const numerocontador = document.getElementById("contador");

botao05.addEventListener("click", function(){
    contador++;
    numerocontador.textContent = contador;

})


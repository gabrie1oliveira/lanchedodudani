    document.addEventListener("DOMContentLoaded", () =>
         {
        const botaoAbrir = document.getElementById("btnAbrirModal");
        const modalContainer = document.getElementById("modalContainer");

        if (!botaoAbrir || !modalContainer) return;

        botaoAbrir.addEventListener("click", () => {
            modalContainer.innerHTML = `
                <div class="modal-fundo">
                    <div class="modal-lanche">
                        <h2>Aviso!</h2>
                        <p>Este modal inteiro foi criado pelo JavaScript.</p>
                        <button id="btnFechaModal" type="button">Fechar</button>
                    </div>
                </div>`;

            document.getElementById("btnFechaModal").addEventListener("click", () => {
                modalContainer.innerHTML = "";
            });
        });
    });
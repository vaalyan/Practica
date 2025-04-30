document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.nav-btn');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const destino = boton.getAttribute('data-url');
            if (destino) {
                window.location.href = destino;
            }
        });
    });
});

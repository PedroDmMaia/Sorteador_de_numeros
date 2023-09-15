document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-sorteador').addEventListener('submit', e => {
        e.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = numeroMaximo * Math.random();
        document.getElementById('resultado-valor').innerText = Math.floor(numeroAleatorio + 1);
        document.querySelector('.resultado').style.display = 'block';
    })
})
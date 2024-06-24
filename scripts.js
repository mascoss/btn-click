// script.js
document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    noButton.addEventListener("click", function() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        const randomX = Math.random() * (viewportWidth - noButton.offsetWidth);
        const randomY = Math.random() * (viewportHeight - noButton.offsetHeight);
        
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    yesButton.addEventListener("click", function() {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Insira o link do vídeo desejado aqui
    });
});

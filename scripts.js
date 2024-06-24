// script.js
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("magicButton");
    
    button.addEventListener("click", function() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        const randomX = Math.random() * (viewportWidth - button.offsetWidth);
        const randomY = Math.random() * (viewportHeight - button.offsetHeight);
        
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    const playButton = document.getElementById('play-music-button');

    playButton.addEventListener('click', function() {
        music.volume = 0.5; // Volumen entre 0 y 1
        music.play().catch(error => {
            console.log("Error al reproducir música:", error);
        });
        playButton.textContent = "🎵 Música reproduciéndose";
        playButton.disabled = true; // Desactiva el botón para evitar múltiples clics
    });
});

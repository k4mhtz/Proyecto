window.addEventListener('scroll', function() {
    const header = document.querySelector('nav');
    // Cuando bajas más de 0px, agrega la clase 'sticky'
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Efecto simple de aparición al cargar
window.addEventListener('load', () => {
    const heroText = document.querySelector('.content');
    heroText.style.opacity = 0;
    heroText.style.transition = 'opacity 2s ease';
    
    setTimeout(() => {
        heroText.style.opacity = 1;
    }, 500);
});
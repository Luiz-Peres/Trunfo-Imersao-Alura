document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.escolha');
    images.forEach(image => {
    image.addEventListener('mouseover', () => {
        images.forEach(img => {
        if (img !== image) {
            img.classList.add('scaled-down');
        }
        });
    });

    image.addEventListener('mouseout', () => {
        images.forEach(img => {
        img.classList.remove('scaled-down');
        });
    });
    });
});
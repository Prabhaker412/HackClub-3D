document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    let angle = 0;
    let isMouseDown = false;
    let startX;
    let startAngle;

    carousel.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX;
        startAngle = angle;
    });

    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        const x = e.pageX;
        const dx = x - startX;
        angle = startAngle + dx * 0.5;
        updateCarousel();
    });

    function updateCarousel() {
        carousel.style.transform = `rotateY(${angle}deg)`;
    }
});
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slides img');
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    const offset = -currentSlide * 100; // Ajuste le décalage
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

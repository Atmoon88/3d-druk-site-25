
let currentSlide = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.gallery img');
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;
    slides.forEach((img, i) => img.style.display = i === currentSlide ? 'block' : 'none');
}
function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }
document.addEventListener("DOMContentLoaded", () => showSlide(currentSlide));

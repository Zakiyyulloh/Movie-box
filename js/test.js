const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').offsetWidth;
let currentSlide = 0;

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.children.length) % slides.children.length;
    updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.children.length;
    updateSliderPosition();
});

function updateSliderPosition() {
    const offset = currentSlide * slideWidth;
    slides.style.transform = `translateX(-${offset}px)`;
}

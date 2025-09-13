const sign=document.querySelector('.nav-signin'); 
sign.addEventListener("click",()=>{
    window.location.href = '/signInUp/index.html';
})

let currentSlideIndex = 1;
const slides = document.querySelectorAll('.sliderr');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index > slides.length) {
        currentSlideIndex = 1;
    } else if (index < 1) {
        currentSlideIndex = slides.length;
    }

    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');

    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));

    // Show the current slide
    slides[currentSlideIndex - 1].style.display = 'block';

    // Add active class to the current dot
    dots[currentSlideIndex - 1].classList.add('active');
}

function moveSlide(n) {
    showSlide(currentSlideIndex += n);
}

function currentSlide(n) {
    showSlide(currentSlideIndex = n);
}

// Initialize the slider
showSlide(currentSlideIndex);

// Auto slide (optional)
setInterval(() => {
    moveSlide(1);
}, 5000); // Slide every 5 seconds

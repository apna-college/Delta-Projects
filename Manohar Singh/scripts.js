const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderContainer = document.querySelector('.slider-container');
const slide = document.querySelectorAll('.testimonial-slide');

let currentIndex = 0;

const updateSliderPosition = () => {
    const slideWidth = slide[0].clientWidth;
    sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slide.length - 1; // Loop back to the last slide
    }
    updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < slide.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first slide
    }
    updateSliderPosition();
});

// Auto-play functionality
let autoPlay = setInterval(() => {
    nextBtn.click();
}, 5000); // Change slide every 5 seconds

// Reset auto-play when user manually navigates
prevBtn.addEventListener('click', () => {
    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        nextBtn.click();
    }, 5000);
});

nextBtn.addEventListener('click', () => {
    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        nextBtn.click();
    }, 5000);
});

// Responsive adjustments for the slider
window.addEventListener('resize', updateSliderPosition);


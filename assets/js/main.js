document.getElementById('selectMenu').addEventListener('change', function() {
    var selectedOption = this.value;
    if (selectedOption !== '') {
      window.location.href = selectedOption;
    }
  });

// nav menu end 

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".arrow.prev");
const nextButton = document.querySelector(".arrow.next");
let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * (100 / 3);
    slider.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 3) {
        currentIndex++;
        updateSlider();
    }
});

updateSlider();

// Popular AudioBooks End



const sliderRq = document.querySelector(".rqSlider");
const slidesRq = document.querySelectorAll(".rqSlide");
const prevButtonRq = document.querySelector(".rqArrow.rqPrev");
const nextButtonRq = document.querySelector(".rqArrow.rqNext");
let currentIndexRq = 0;

function updateSliderRq() {
    const offset = -currentIndexRq * (100 / 3);
    sliderRq.style.transform = `translateX(${offset}%)`;
}

prevButtonRq.addEventListener("click", () => {
    if (currentIndexRq > 0) {
        currentIndexRq--;
        updateSliderRq();
    }
});

nextButtonRq.addEventListener("click", () => {
    if (currentIndexRq < slidesRq.length - 3) {
        currentIndexRq++;
        updateSliderRq();
    }
});

updateSliderRq();
document.getElementById('selectMenu').addEventListener('change', function() {
    var selectedOption = this.value;
    if (selectedOption !== '') {
      window.location.href = selectedOption;
    }
  });

// nav menu end 

/* const slider = document.querySelector(".slider");
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
 */

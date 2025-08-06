const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSliderPosition();
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSliderPosition();
}

nextButton.addEventListener("click", showNextSlide);
prevButton.addEventListener("click", showPrevSlide);

let autoSlideInterval = setInterval(showNextSlide, 4000);

slider.addEventListener("mouseenter", function () {
  clearInterval(autoSlideInterval);
});

slider.addEventListener("mouseleave", function () {
  autoSlideInterval = setInterval(showNextSlide, 4000);
});
updateSliderPosition();

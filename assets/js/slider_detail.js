
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
const progressBar = document.getElementById("progressBar");
let autoSlideInterval;

function showSlide(n) {
    // حذف کلاس active از همه اسلایدها و نشانگرها
    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    // اضافه کردن کلاس active به اسلاید و نشانگر فعلی
    slides[n].classList.add("active");
    indicators[n].classList.add("active");

    // ری‌استارت کردن نوار پیشرفت
    progressBar.classList.remove("active");
    setTimeout(() => {
        progressBar.classList.add("active");
    }, 100);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    resetAutoSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    resetAutoSlide();
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// شروع اسلایدر خودکار
progressBar.classList.add("active");
startAutoSlide();

// توقف موقت هنگام hover
const sliderContainer = document.querySelector(".slider-container");
sliderContainer.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
    progressBar.style.animationPlayState = "paused";
});

sliderContainer.addEventListener("mouseleave", () => {
    startAutoSlide();
    progressBar.style.animationPlayState = "running";
});
let slides = document.querySelectorAll(".carousel-slide");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
slides.forEach((slide, index) => {
  console.log(slide, index);
});

nextBtn.addEventListener("click", () => {
  let activeSlide = document.querySelector(".active");
  let nextSlide = activeSlide.nextElementSibling;

  activeSlide.classList.remove("active");

  if (nextSlide === null) {
    nextSlide = slides[0];
  }

  nextSlide.classList.add("active");
});


prevBtn.addEventListener("click",()=>{
    let activeSlide = document.querySelector(".active");
    let prevSlide = activeSlide.previousElementSibling;
    activeSlide.classList.remove("active");
    if (prevSlide === null) {
        prevSlide = slides[slides.length - 1];
    }
    prevSlide.classList.add("active");


})
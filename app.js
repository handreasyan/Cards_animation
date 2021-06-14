const slides = document.querySelectorAll(".slide");
slides.forEach((slide) => {
  slide.addEventListener("click", (event) => {
    clearActiveCLasses();
    slide.classList.add("active");
    let style = getComputedStyle(slide).backgroundImage;
    document.body.style.backgroundImage = style;
  });
});

function clearActiveCLasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

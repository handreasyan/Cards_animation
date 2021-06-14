function sildesPlugin(activeNum = 2) {
  const slides = document.querySelectorAll(".slide");

  slides[activeNum].classList.add("active");

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
}
sildesPlugin(2);

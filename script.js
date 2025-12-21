document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("HomePage-slider");
  const slides = [...slider.querySelectorAll(".slide")];
  const dotsContainer = document.getElementById("slider-dots");
  const navToggle = document.getElementById("nav-toggle");
  const header = document.querySelector(".site-header");

  let current = 0;
  const delay = 6000;
  let auto;

  // Krijjimi i rrethave 
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.dataset.index = i;
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  const dots = [...dotsContainer.children];

  // Nderrimi i sjalldeve
  function goTo(i) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");

    current = (i + slides.length) % slides.length;

    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // Nderrimi automatikisht pas 6 sekondave
  function start() {
    stop();
    auto = setInterval(next, delay);
  }
  function stop() {
    clearInterval(auto);
  }

  // Shtypja e rrethave
  dots.forEach(dot =>
    dot.addEventListener("click", e => {
      goTo(+e.target.dataset.index);
      start();
    })
  );

  // Hover pause
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);

  // Navigimi ne mobile
  navToggle.addEventListener("click", () => {
    const expand = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expand);
    header.classList.toggle("nav-open");
  });


  start(); // start Automatizmin
});

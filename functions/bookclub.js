window.addEventListener("load", function() {
  animateNumber("card1", 250, 5);
  animateNumber("card2", 24, 1);
  animateNumber("card3", 60, 2);
});

function animateNumber(elementId, target, step) {
  var element = document.getElementById(elementId);
  var current = 0;
  
  var timer = setInterval(function() {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = current.toLocaleString();
  }, 30);
}

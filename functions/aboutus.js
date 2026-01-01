// About page script

// Animate numbers when page loads
window.addEventListener("load", function() {
  animateNumber("books-count", 5000, 100);
  animateNumber("users-count", 1200, 50);
  animateNumber("borrows-count", 8500, 200);
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

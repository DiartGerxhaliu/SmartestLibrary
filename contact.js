// Map modal functions
function openMap() {
  document.getElementById('mapModal').style.display = 'flex';
}

function closeMap() {
  document.getElementById('mapModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('mapModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Contact form script
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  var name = document.querySelector('input[name="name"]').value;
  var email = document.querySelector('input[name="email"]').value;
  var message = document.querySelector('textarea[name="message"]').value;
  
  if (name && email && message) {
    alert("Thank you! Your message has been sent.");
    document.getElementById("contact-form").reset();
  } else {
    alert("Please fill in all required fields.");
  }
});

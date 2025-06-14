// Show welcome message when page loads
window.onload = function () {
  alert("Welcome to Cozy Café! ☕ Enjoy your visit.");
};

// Example: Menu filtering (future upgrade - for now just logs clicks)
document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.item');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      alert(`You selected: ${item.querySelector('h3').innerText}`);
    });
  });
});


// Global variable
let isBoxAnimated = false;

// Function with parameters and return value
function toggleClass(element, className) {
  element.classList.toggle(className);
  return element.classList.contains(className);
}

// Local scope demonstration
function animateBox() {
  const box = document.getElementById('box');
  isBoxAnimated = toggleClass(box, 'animate');
}

// Reusable function to show modal
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

// Reusable function to hide modal
function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Flip card function
function flipCard(cardId) {
  const card = document.getElementById(cardId);
  toggleClass(card, 'flip');
}

// Event listeners
document.getElementById('animateBtn').addEventListener('click', animateBox);
document.getElementById('flipCardBtn').addEventListener('click', () => flipCard('card'));
document.getElementById('showModalBtn').addEventListener('click', () => showModal('modal'));
document.getElementById('closeModalBtn').addEventListener('click', () => hideModal('modal'));


// Get the modal, button, and close elements
const volunteerModal = document.getElementById('volunteerModal');
const volunteerBtn1 = document.getElementById('volunteerBtn1');
const volunteerBtn2 = document.getElementById('volunteerBtn2');

const closeVolunteerModal = document.getElementById('closeVolunteerModal');
const imagePreview = document.getElementById('imagePreview');
const volunteerImageInput = document.getElementById('volunteerImage');

// When the "Join as a Volunteer" button is clicked, open the modal
volunteerBtn1.addEventListener('click', () => {
  volunteerModal.style.display = 'flex';
});
volunteerBtn2.addEventListener('click', () => {
  volunteerModal.style.display = 'flex';
});

// When the close button is clicked, close the modal
closeVolunteerModal.addEventListener('click', () => {
  volunteerModal.style.display = 'none';
});

// Optionally, close the modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
  if (event.target === volunteerModal) {
    volunteerModal.style.display = 'none';
  }
});

/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};




ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 1500,
  delay: 200
});

ScrollReveal().reveal(
    '.home-content, .section3-header, .team-section h1', {origin: 'top'});
ScrollReveal().reveal('.home-img, .team-members div, .volunteers-box div, .section3-pets-grid',{origin: 'bottom'});
ScrollReveal().reveal(
    '.home-content h1,.home-content h3, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});
ScrollReveal().reveal(
    '.team-members>div, .section3-pets-grid>div, .pet-utilities div, .volunteer-testimonials>div',
    {interval: 200});
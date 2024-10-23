const images = [
  'url(images/slideshow/slide1.jpg)', 'url(images/slideshow/slide2.jpg)',
  'url(images/slideshow/slide3.jpg)'
];

let currentIndex = 0;

const slideshowDiv = document.querySelector('.section1');

// Function to change background
function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length;
  slideshowDiv.style.backgroundImage = images[currentIndex];
}

// Start the slideshow immediately
slideshowDiv.style.backgroundImage =
    images[currentIndex];  // Display first image immediately

// Continue the slideshow every 3 seconds
setInterval(changeBackground, 3000);



// Function to animate counting from 0 to the target number
function animateCounter(element, target) {
  let count = 0;
  const increment =
      Math.ceil(target / 100);  // Adjust speed by dividing into steps
  const interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      element.textContent = `${target}+`;
      clearInterval(interval);
    } else {
      element.textContent = `${count}+`;
    }
  }, 20);  // Adjust speed of counting (30ms per increment)
}

// Observe when the section comes into view
function createObserver() {
  const options = {
    threshold: 0.5
  };  // Trigger when 50% of the section is in view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numberElements = document.querySelectorAll('.numberOf-box h3');
        numberElements.forEach(element => {
          const targetNumber =
              parseInt(element.textContent, 10);  // Extract the number
          animateCounter(element, targetNumber);
        });
        observer.disconnect();  // Stop observing after counting to prevent
                                // retriggering
      }
    });
  }, options);

  const section = document.querySelector('.section2-content');
  if (section) observer.observe(section);
}

// Start the observer when the DOM is loaded
document.addEventListener('DOMContentLoaded', createObserver);

// Get the modal and the modal image element
const modal = document.getElementById('editModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

// Get all images inside the portfolio-box divs
const portfolioImages = document.querySelectorAll('.portfolio-box img');

// Add click event listeners to each image
portfolioImages.forEach(image => {
  image.addEventListener('click', () => {
    // Set the clicked image's source to the modal image
    modalImage.src = image.src;
    // Display the modal
    modal.style.display = 'flex';
  });
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Optionally, close the modal when clicking outside the modal
// content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

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

// Preview the uploaded image
volunteerImageInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.src = e.target.result;
      imagePreview.style.display = 'block';  // Show the image preview
    };
    reader.readAsDataURL(file);
  } else {
    imagePreview.style.display =
        'none';  // Hide the preview if no image is selected
  }
});

/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

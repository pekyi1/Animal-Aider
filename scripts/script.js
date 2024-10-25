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
const volunteerBtn3 = document.getElementById('volunteerBtn3');


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
volunteerBtn3.addEventListener('click', () => {
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


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']')
            .classList.add('active');
      });
    };
  });

  /*==================== sticky navbar ====================*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link
   * (scroll) ====================*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};



// // Video script
// const viewIntroBtn = document.getElementById('viewIntroBtn');
// const videoModal = document.getElementById('videoModal');
// const closeBtn = document.querySelector('.video-modal .close');
// const introVideo = document.getElementById('introVideo');

// // Open modal and play video
// viewIntroBtn.addEventListener('click', () => {
//   videoModal.style.display = 'block';
//   introVideo.play();
// });

// // Close modal and stop video
// closeBtn.addEventListener('click', () => {
//   videoModal.style.display = 'none';
//   introVideo.pause();
//   introVideo.currentTime = 0;
// });

// // Close modal when clicking outside the modal content
// window.addEventListener('click', (event) => {
//   if (event.target === videoModal) {
//     videoModal.style.display = 'none';
//     introVideo.pause();
//     introVideo.currentTime = 0;
//   }
// });

/*==================== scroll reveal ====================*/
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal(
    '.home-content, .section3-header, .team-section h1, .portfolio-container, .section7 h1',
    {origin: 'top'});
ScrollReveal().reveal(
    '.home-img, .team-members div, .volunteers-box div, .section3-pets-grid>div, .pet-utilities div, .volunteer-testimonials>div',
    {origin: 'bottom'}, {interval: 200});
ScrollReveal().reveal(
    '.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal(
    '.home-content p,.home-content h3, .about-content', {origin: 'right'});
ScrollReveal().reveal('.team-members>div, .section3-pets-grid>div, .pet-utilities div, .volunteer-testimonials>div', {interval: 200});
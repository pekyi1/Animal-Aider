let currentTestimonial = 0;

function generateDots() {
  const dotsContainer = document.getElementById('dots-container');
  const testimonials = document.querySelectorAll('.testimonial-content');

  // Clear existing dots
  dotsContainer.innerHTML = '';

  // Generate new dots
  testimonials.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (idx === 0) dot.classList.add('active');  // Activate the first dot
    dot.addEventListener('click', () => goToTestimonial(idx));
    dotsContainer.appendChild(dot);
  });
}

function updateTestimonials() {
  const testimonials = document.querySelectorAll('.testimonial-content');
  const dots = document.querySelectorAll('.dot');

  testimonials.forEach((testimonial, idx) => {
    testimonial.classList.remove('active', 'next');
    dots[idx].classList.remove('active');
    if (idx === currentTestimonial) {
      testimonial.classList.add('active');
      dots[idx].classList.add('active');
    } else if (idx === (currentTestimonial + 1) % testimonials.length) {
      testimonial.classList.add('next');
    }
  });
}

function nextTestimonial() {
  const testimonials = document.querySelectorAll('.testimonial-content');
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateTestimonials();
}

function prevTestimonial() {
  const testimonials = document.querySelectorAll('.testimonial-content');
  currentTestimonial =
      (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  updateTestimonials();
}

function goToTestimonial(index) {
  currentTestimonial = index;
  updateTestimonials();
}

// Initialize the dots and testimonials on load
generateDots();
updateTestimonials();
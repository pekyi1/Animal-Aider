// Get elements
const viewIntroBtn1 = document.getElementById('viewIntroBtn1');
const viewIntroBtn2 = document.getElementById('viewIntroBtn2');
const videoModal = document.getElementById('videoModal');
const closeBtn = document.querySelector('.video-modal .close');
const introVideo = document.getElementById('introVideo');

// Open modal and play video
viewIntroBtn1.addEventListener('click', () => {
  videoModal.style.display = 'block';
  introVideo.play();
});
viewIntroBtn2.addEventListener('click', () => {
  videoModal.style.display = 'block';
  introVideo.play();
});

// Close modal and stop video
closeBtn.addEventListener('click', () => {
  videoModal.style.display = 'none';
  introVideo.pause();
  introVideo.currentTime = 0;
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === videoModal) {
    videoModal.style.display = 'none';
    introVideo.pause();
    introVideo.currentTime = 0;
  }
});
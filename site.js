const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));
}

const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* Publication image popup modal */
const popupImages = document.querySelectorAll('.image-popup');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const imageModalClose = document.querySelector('.image-modal-close');

if (popupImages.length > 0 && imageModal && modalImage && imageModalClose) {
  popupImages.forEach((img) => {
    img.addEventListener('click', () => {
      modalImage.src = img.dataset.full || img.src;
      modalImage.alt = img.alt;
      imageModal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  imageModalClose.addEventListener('click', () => {
    imageModal.style.display = 'none';
    modalImage.src = '';
    document.body.style.overflow = '';
  });

  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
      imageModal.style.display = 'none';
      modalImage.src = '';
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal.style.display === 'block') {
      imageModal.style.display = 'none';
      modalImage.src = '';
      document.body.style.overflow = '';
    }
  });
}
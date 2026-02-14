// Theme toggle
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('light-theme');
});

// Image Modal
const imageModal = document.getElementById('imageModal');
if (imageModal) {
  imageModal.addEventListener('show.bs.modal', function (event) {
    const link = event.relatedTarget;
    const imgSrc = link.getAttribute('data-img-src');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imgSrc;
  });
}

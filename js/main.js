document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopButton = document.getElementById('btn-ir-arriba');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  const carousel = document.querySelector('.carousel');
  const slides = carousel.querySelectorAll('.slide');
  let currentSlide = 0;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  function updateCarousel() {
    const offset = -currentSlide * 100 + '%';
    carousel.style.transform = `translateX(${offset})`;
  }

  // Controladores de flechas
  const nextButton = document.createElement('button');
  nextButton.textContent = '>';
  nextButton.addEventListener('click', nextSlide);
  carousel.appendChild(nextButton);

  const prevButton = document.createElement('button');
  prevButton.textContent = '<';
  prevButton.addEventListener('click', prevSlide);
  carousel.appendChild(prevButton);

  updateCarousel();
});

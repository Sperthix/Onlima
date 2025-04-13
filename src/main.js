import './style.css';
import Swiper from 'swiper';
import 'swiper/css';

// Swiper
new Swiper('#patients-swiper', {
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 12,
  loop: true,
  navigation: { nextEl: '#patients-button-next', prevEl: '#patients-button-prev' },
});
new Swiper('#doctors-swiper', {
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 12,
  loop: true,
  navigation: { nextEl: '#doctors-button-next', prevEl: '#doctors-button-prev' },
});

// Swiper tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.swiper-container').forEach(container => container.classList.add('hidden'));
    document.getElementById(btn.dataset.target).classList.remove('hidden');
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
  });
});

// FAQ 
document.querySelectorAll('.faq-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const contentEl = document.getElementById(btn.dataset.target)
    const icon = btn.querySelector('img')

    document.querySelectorAll('.faq-content').forEach(el => {
      if (el !== contentEl) {
        el.style.maxHeight = 0
        el.previousElementSibling.querySelector('img').classList.remove('rotate-180')
      }
    })

    if (contentEl.style.maxHeight && contentEl.style.maxHeight !== '0px') {
      contentEl.style.maxHeight = 0
      icon.classList.remove('rotate-180')
    } else {
      contentEl.style.maxHeight = contentEl.scrollHeight + 'px'
      icon.classList.add('rotate-180')
    }
  })
})
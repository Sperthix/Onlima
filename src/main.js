import './style.css';
import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
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
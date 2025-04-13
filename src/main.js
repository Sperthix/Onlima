import './style.css';
import Swiper from 'swiper';
import 'swiper/css';

// Benefity
document.querySelectorAll('.benefits-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const contentEl = document.getElementById(targetId);
    
    document.querySelectorAll('.benefits-toggle').forEach(otherBtn => {
      if (otherBtn !== btn) {
        otherBtn.querySelector('img').classList.remove('-rotate-90');
      }
    });
    
    // Skry všetky benefit obsahy, okrem toho, ktorý chceme prepínať
    document.querySelectorAll('.benefits-content').forEach(el => {
      if (el.id !== targetId) {
        el.classList.add('hidden');
      }
    });
    
    // Prepni stav zobrazenia pre aktuálny benefit obsah a otoč šípku
    if (contentEl.classList.contains('hidden')) {
      contentEl.classList.remove('hidden');
      btn.querySelector('img').classList.add('-rotate-90');
    } else {
      contentEl.classList.add('hidden');
      btn.querySelector('img').classList.remove('-rotate-90');
    }
  });
});

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
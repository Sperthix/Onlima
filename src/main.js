import './style.css';
import Swiper from 'swiper';
import 'swiper/css';

// Hamburger menu
document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

// Benefity
document.querySelectorAll('.benefits-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const contentEl = document.getElementById(targetId);
    
    document.querySelectorAll('.benefits-toggle').forEach(otherBtn => {
      if (otherBtn !== btn) {
        otherBtn.querySelector('img').classList.remove('-rotate-90');
        otherBtn.classList.remove('selected');
      }
    });
    
    document.querySelectorAll('.benefits-content').forEach(el => {
      if (el.id !== targetId) {
        el.classList.add('hidden');
      }
    });
    
    if (contentEl.classList.contains('hidden')) {
      contentEl.classList.remove('hidden');
      btn.querySelector('img').classList.add('-rotate-90');
      btn.classList.add('selected');
    } else {
      contentEl.classList.add('hidden');
      btn.querySelector('img').classList.remove('-rotate-90');
      btn.classList.remove('selected');
    }
  });
});

// Benefity mobile
document.querySelectorAll('.benefits-toggle-mobile').forEach(btn => {
  btn.addEventListener('click', () => {
    const contentEl = document.getElementById(btn.dataset.target)
    const icon = btn.querySelector('img')

    document.querySelectorAll('.benefits-content-mobile').forEach(el => {
      if (el !== contentEl) {
        el.style.maxHeight = 0
        el.previousElementSibling.querySelector('img').classList.remove('rotate-180')
      }
    })

    document.querySelectorAll('.benefits-toggle-mobile').forEach(otherBtn => {
      otherBtn.parentElement.classList.remove('selected');
    });

    if (contentEl.style.maxHeight && contentEl.style.maxHeight !== '0px') {
      contentEl.style.maxHeight = 0
      icon.classList.remove('rotate-180')
      btn.parentElement.classList.remove('selected')
    } else {
      contentEl.style.maxHeight = contentEl.scrollHeight + 'px'
      icon.classList.add('rotate-180')
      btn.parentElement.classList.add('selected');
    }
  })
})

// Swiper
const functionSwiper = new Swiper('#funcionality-swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 24,
  loop: true,
});

const patientsSwiper = new Swiper('#patients-swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 12,
  loop: true,
  loopedSlides: 7,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 33,
    },
    1024: {
      slidesPerView: 5,
    },
    1920: {
      slidesPerView: 7
    }
  }
});

const doctorsSwiper = new Swiper('#doctors-swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 12,
  loop: true,
  loopedSlides: 7,
  loopAdditionalSlides: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 33,
    },
    1024: {
      slidesPerView: 5,
    },
    1920: {
      slidesPerView: 7
    }
  }
});

document.getElementById('functions-button-next').addEventListener('click', () => {
  functionSwiper.slideNext();
});
document.getElementById('functions-button-prev').addEventListener('click', () => {
  functionSwiper.slidePrev();
});

document.getElementById('patients-button-next').addEventListener('click', () => {
  patientsSwiper.slideNext();
});
document.getElementById('patients-button-prev').addEventListener('click', () => {
  patientsSwiper.slidePrev();
});

document.getElementById('doctors-button-next').addEventListener('click', () => {
  doctorsSwiper.slideNext();
});
document.getElementById('doctors-button-prev').addEventListener('click', () => {
  doctorsSwiper.slidePrev();
});

// Swiper tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.swiper-container').forEach(container => container.classList.add('hidden'));
    const target = btn.getAttribute('data-target');
    const targetContainer = document.getElementById(target);
    targetContainer.classList.remove('hidden');
    
    if (target === 'doctors-swiper') {
      doctorsSwiper.update();
    } else {
      patientsSwiper.update();
    }
    
    document.querySelectorAll('.tab-btn').forEach(tab => tab.classList.remove('active'));
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

    document.querySelectorAll('.faq-toggle').forEach(otherBtn => {
      otherBtn.parentElement.classList.remove('selected');
    });

    if (contentEl.style.maxHeight && contentEl.style.maxHeight !== '0px') {
      contentEl.style.maxHeight = 0
      icon.classList.remove('rotate-180')
      btn.parentElement.classList.remove('selected')
    } else {
      contentEl.style.maxHeight = contentEl.scrollHeight + 'px'
      icon.classList.add('rotate-180')
      btn.parentElement.classList.add('selected');
    }
  })
})
import './style.css';
import Swiper from 'swiper';
import 'swiper/css';


// Hamburger menu
document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});


// Benefity
const benefitsData = {
  ben1: {
    img: 'src/assets/benefits.jpg',
    text: 'Voláte Vášmu lekárovi, ale je obsadený. Tak zavoláte neskôr a zas je obsadený. Voláte opäť o hodinu, tento krát Vám nikto nedvíha. Pritom ho chcete len požiadať, aby Vám elektronicky zaslal recept na lieky, ktoré pravidelne beriete. Práve u nás na to slúži funkcia Správa lekárovi.'
  },
  ben2: {
    img: 'src/assets/benefits.jpg',
    text: 'Voláte Vášmu lekárovi, ale je obsadený. Tak zavoláte neskôr a zas je obsadený. Voláte opäť o hodinu, tento krát Vám nikto nedvíha. Pritom ho chcete len požiadať, aby Vám elektronicky zaslal recept na lieky, ktoré pravidelne beriete.'
  },
  ben3: {
    img: 'src/assets/benefits.jpg',
    text: 'Voláte Vášmu lekárovi, ale je obsadený. Tak zavoláte neskôr a zas je obsadený. Voláte opäť o hodinu, tento krát Vám nikto nedvíha.3'
  },
  ben4: {
    img: 'src/assets/benefits.jpg',
    text: 'Voláte Vášmu lekárovi, ale je obsadený. Tak zavoláte neskôr a zas je obsadený. Voláte opäť o hodinu, tento krát Vám nikto nedvíha.4'
  },
  ben5: {
    img: 'src/assets/benefits.jpg',
    text: 'Voláte Vášmu lekárovi, ale je obsadený. Tak zavoláte neskôr a zas je obsadený. Voláte opäť o hodinu, tento krát Vám nikto nedvíha.5'
  },
  ben6: {
    img: 'src/assets/benefits.jpg',
    text: 'Voláte Vášmu lekárovi, ale je obsadený. Tak zavoláte neskôr a zas je obsadený. Voláte opäť o hodinu, tento krát Vám nikto nedvíha.6'
  }
};

const toggles = document.querySelectorAll('.benefits-toggle');
const imgEl   = document.getElementById('benefits-img');
const txtEl   = document.getElementById('benefits-text');

function selectBenefit(btn) {
  toggles.forEach(b => {
    b.classList.remove('selected');
    b.querySelector('.arrow-icon').classList.remove('-rotate-90');
  });
  btn.classList.add('selected');
  btn.querySelector('.arrow-icon').classList.add('-rotate-90');
  imgEl.src = benefitsData[btn.dataset.key].img;
  txtEl.textContent = benefitsData[btn.dataset.key].text;
}

toggles.forEach(btn => {
  btn.addEventListener('click', () => {
    selectBenefit(btn);
  });
});

selectBenefit(toggles[0]);


// Benefity mobile
const mobToggles = document.querySelectorAll('.benefits-toggle-mobile');
const imgMob     = document.getElementById('benefits-img-mobile');

function toggleMobile(btn) {
  const txt = btn.querySelector('.benefits-content-mobile');
  const arrow = btn.querySelector('.arrow-icon');

  if (txt.style.maxHeight && txt.style.maxHeight !== '0px') {
    txt.style.maxHeight = '0';
    btn.classList.remove('selected');
    arrow.classList.remove('rotate-180');
    return;
  }

  mobToggles.forEach(other => {
    const t = other.querySelector('.benefits-content-mobile');
    const a = other.querySelector('.arrow-icon');
    t.style.maxHeight = '0';
    other.classList.remove('selected');
    a.classList.remove('rotate-180');
  });

  txt.style.maxHeight = txt.scrollHeight + 'px';
  btn.classList.add('selected');
  arrow.classList.add('rotate-180');

  const key = btn.dataset.key;
  imgMob.src = benefitsData[key].img;
}

mobToggles.forEach(btn => {
  btn.addEventListener('click', () => toggleMobile(btn));
});

toggleMobile(mobToggles[0]);


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
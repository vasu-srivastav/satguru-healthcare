// hero.js
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  });

  const heroSwiper = new Swiper('.mySwiper', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    loop: true,
    speed: 1000,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function () {
        handleSlideAOS(this);
      },
      slideChangeTransitionStart: function () {
        handleSlideAOS(this);
      },
    },
  });

// Swiper Initialization
const testimonialSwiper = new Swiper(".testimonialSwiper", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Live typing effect
let typedStarted = false;
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !typedStarted) {
      typedStarted = true;
      new Typed("#typed-actual", {
        strings: ["See what our trusted users Say"],
        typeSpeed: 60,
        backSpeed: 30,
        startDelay: 200,
        showCursor: false,
      });
      observer.disconnect();
    }
  });
}, { threshold: 0.5 });

const testimonialSection = document.querySelector("#testimonials-setion");
if (testimonialSection) {
  observer.observe(testimonialSection);
}





  function handleSlideAOS(swiper) {
    swiper.slides.forEach((slide) => {
      const elements = slide.querySelectorAll('[data-aos]');
      elements.forEach((el) => el.classList.remove('aos-animate'));
    });
    setTimeout(() => {
      const activeSlide = swiper.slides[swiper.activeIndex];
      const elements = activeSlide.querySelectorAll('[data-aos]');
      elements.forEach((el) => el.classList.add('aos-animate'));
    }, 100);
  }
});
  document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const arrow = button.querySelector('.faq-arrow');

      content.classList.toggle('hidden');
      arrow.classList.toggle('rotate-180');
    });
  });


  // 
  const productSwiper = new Swiper(".productSwiper", {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
var allProductsSwiper = new Swiper(".allProductsSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

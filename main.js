//Toggle menu ----------------
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
  });
}

//Close menu when link is clicked -----------------
const links = document.querySelectorAll('nav ul li a');

for (const element of links) {
  element.addEventListener('click', function () {
    nav.classList.remove('show');
  });
}

//Scroll change header ----------------
function scrollChangeHeader() {
  const header = document.querySelector('#header');
  const navHeight = header.offsetHeight;
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

//Show / Hide back to top ----------------
function backToTop() {
  const backToTop = document.querySelector('.back-to-top');

  if (window.scrollY >= 560) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
}

//Add event scroll ----------------
window.addEventListener('scroll', function () {
  scrollChangeHeader();
  backToTop();
});

//Testimonials carousel ----------------
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
});

//Scrollreveal ----------------
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
);

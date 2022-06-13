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

//Testimonials carousel ----------------
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

//Scroll change header ----------------
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function scrollChangeHeader() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

//Show / Hide back to top ----------------
const backToTop = document.querySelector('.back-to-top');

function fBackToTop() {
  if (window.scrollY >= 560) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
}

//Activate menu at current section ----------------
const sections = document.querySelectorAll('main section[id]');
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  }
}

//Add event scroll ----------------
window.addEventListener('scroll', function () {
  scrollChangeHeader();
  fBackToTop();
  activateMenuAtCurrentSection();
});

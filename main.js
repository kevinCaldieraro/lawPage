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

//scroll change header ----------------
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

window.sr = ScrollReveal({
  reset: true
});
sr.reveal('.i-container', {
  duration: 2000
});

sr.reveal('.s-container', {
  duration: 2000
});

sr.reveal('.c-container', {
  duration: 2000
});

sr.reveal('.p-container', {
  duration: 2000
});

sr.reveal('.sc-container', {
  duration: 2000
});

sr.reveal('.ct-container', {
  duration: 2000
});

window.addEventListener('scroll', function() {
  let scroll = document.querySelector('.scroll-top');
  scroll.classList.toggle('active', window.scrollY > 450);
});

function backTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}


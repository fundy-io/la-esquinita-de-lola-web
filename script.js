const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle?.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  menu?.classList.toggle('is-open', !isOpen);
});

document.querySelectorAll('.menu a').forEach((link) => {
  link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    menu?.classList.remove('is-open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

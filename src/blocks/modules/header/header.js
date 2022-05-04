document.querySelector('.header__btn-menu').addEventListener('click', () => {
  document.querySelectorAll('.menu').forEach((el) => {
    el.classList.toggle('menu--open');
  });
});

document.querySelector('.header__btn').addEventListener('click', () => {
  document
    .querySelector('.rightside-menu')
    .classList.remove('rightside-menu--close');
});

document
  .querySelector('.rightside-menu__close')
  .addEventListener('click', () => {
    document
      .querySelector('.rightside-menu')
      .classList.add('rightside-menu--close');
  });

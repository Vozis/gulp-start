// import $ from 'jquery';

// if ($(window).width() < 651) {
//   $('.work-path__item--measurements').appendTo($('.work-path__items-box'));
// }

function someFunc() {
  if (document.documentElement.clientWidth < 651) {
    document
      .querySelector('.work-path__items-box')
      .append(document.querySelector('.work-path__item--measurements'));
  } else {
    document
      .querySelector('.work-path__items-box')
      .after(document.querySelector('.work-path__item--measurements'));
  }
}

window.addEventListener('resize', function () {
  someFunc();
});

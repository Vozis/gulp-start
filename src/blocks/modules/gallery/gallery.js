import mixitup from 'mixitup';

const el = document.querySelector('.gallery__inner');

if (el) {
  const mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living',
    },
  });
}

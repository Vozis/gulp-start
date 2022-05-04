import $ from 'jquery';
import 'slick-carousel';

$('.contact-slider__inner').slick({
  dots: true,
  arrows: false,
  // fade: true,
  // autoplay: true,
  slidesToShow: 10,
  slidesToScroll: 10,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
      },
    },
    {
      breakpoint: 1511,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 841,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 551,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

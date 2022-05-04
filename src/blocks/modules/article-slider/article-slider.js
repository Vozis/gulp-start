import $ from 'jquery';
import 'slick-carousel';

$('.article-slider__box').slick({
  prevArrow:
    '<button type="button" class="article-slider__arrow article-slider__arrow--prev"><img src="../img/arrow-prev.svg" alt="arrow-prev" /></button>',
  nextArrow:
    '<button type="button" class="article-slider__arrow article-slider__arrow--next"><img src="../img/arrow-next.svg" alt="arrow-prev" /></button>',
});

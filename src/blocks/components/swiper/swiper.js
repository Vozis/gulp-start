// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

const imageSlider = new Swiper(".image-slider", {
  // стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //  Навигация
  pagination: {
    el: ".swiper-pagination",

    //Буллеты
    clickable: true,
    // Динамически буллеты
    dynamicBullets: true,
    // Кастомные буллеты
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },

    /*
    // Фракция - текущая страница слайдера
    type: "fraction",
    // Кастомный вывод фракции
    renderFraction: function (currentClass, totalClass) {
      return ` Фото <span class="${currentClass}"></span> из <span class="${totalClass}"></span>`;
    },
*/

    // Прогрессбар
    // type: "progressbar",
  },

  // Скролл
  // scrollBar: {
  //   el: ".swiper-scrollbar",
  //   // Возможность перетаскивать скролл
  //   draggable: true,
  // },

  // Включение/ отключение
  // перетаскивание на ПК
  simulateTouch: true,
  // Чувтсвительность сдвига
  touchRatio: 1,
  // Угол срабатывание свайпа
  touchAngle: 45,
  //  Курсор перетаскивания
  grabCursor: true,
  // Переключение на слайд при клике
  slideToClickedSlide: true,

  // Навигация по хешу
  hashNavigation: {
    watchState: true,
  },

  // Управление клавиатурой
  keyboard: {
    // Вкл/ выкл
    enabled: true,
    // вкл / выкл
    // только когда слайдер
    // в пределах вьюпорта
    onlyInViewport: true,
    // вкл / выкл
    // только управление клавишами
    // pageUp pageDown
    pageUpDown: true,
  },

  // Управление колесом мыши
  mousewheel: {
    // Чувствительность колеса мыши
    sensitivity: 1,
    // Класс объекта, на котором
    // бкдет срабатывать прокрутка мышью
    eventsTarget: ".image-slider",
  },

  // Автовысота элементов
  autoHeight: false,

  // количество слайдов для показа
  slidesPerView: 2,
  // Отключение функции
  // если слайдов меньше, чем нужно
  watchOverflow: false,

  //  Отступ между слайдами
  spaceBetween: 30,

  // Количество пролистываемых слайдов
  slidesPerGroup: 1,

  // Активный слайд по центру
  centeredSlides: false,

  // Стартовый слайд
  initialSlide: 0,

  // Мультирядность - слайды в несколько рядов
  // ОТКЛЮЧИТЬ AUTOHEIGHT
  slidesPerColumn: 1,

  // Бесконечные слайды
  loop: false,

  // Количество дублтрующих слайдов
  loopedSlides: 3,

  // Свободный режим
  freeMode: false,

  // Автопрокрутка
  /* 
  autoplay: {
    // Пауза между слайдами
    delay: 2000,
    // Закончить на последнем слайде
    stopOnLastSlide: true,
    // Включить после ручного переключения
    disableOnInteraction: false,
  },
  */

  // Скорость переключения слайдов
  speed: 500,

  // Вертикальный слайдер
  // direction: "vertical",

  // Эффекты перреключения слайдов
  // Листание
  effect: "slide", // "fade", "flip", "cube", "coverflow"

  // Настройка к fade
  fadeEffect: {
    // паралелльная смена прозрачности
    crossFade: true,
  },

  // Настрока к flip
  flipEffect: {
    // тень
    slideShadow: true,
    // Показ только активного слайда
    limitRotation: true,
  },

  // Настройка к Cube
  cubeEffect: {
    // настройка тени
    slideShadow: true,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },

  // Настройка к coverflow
  coverflowEffect: {
    // Угол
    rotate: 20,
    // Наложение
    stretch: 50,
    // Тень
    slideShadow: true,
  },

  // Адаптив слайдера
  // от ширины экрана
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },

  // Оптимизация времени загрузки сайта
  /*
   1. в HTML для картинок class="swiper-lazy"\
   2. src заменить на data-src 
   3. в src добавить картинку 1х1 
   4. в обертке картинки добавить div.swiper-lazy-preloader
   */

  // Отключить предзагрузку картинок
  preloadImages: false,

  // Lazy loading
  lazy: {
    // подгрузка на старте
    // переключения слайда
    loadOnTransitionStart: false,

    // Подгружать предыдущую и следующую картинки
    loadPrevNext: false,
  },

  // Слежка за видимыми файлами
  watchSlidesProgress: true,
  // Добавление класса видимым слайдам
  watchSlidesVisibility: true,

  // Увеличение картинки
  /*
  1. Для обертки картинки добавит class="swiper-zoom-container"
  */
  zoom: {
    // max увеличение
    maxRatio: 5,
    // min увеличение
    minRatio: 1,
  },

  // Миниатюры (preview)
  // thumbs: {
  //   // Свайпер с миниатюрами и его натсройки
  //   swiper: {
  //     el: ".image-mini-slider",
  //     slidesPerView: 5,
  //   },
  // },

  // Обновить слайдер при изменении элементов свайпера
  observer: true,

  // Обновить слайдер пр изменении родительноского элемента свайпера
  observeParents: true,

  // Обновить свайпер при изменении дочерних элементов слайда
  observeSlideChildren: true,

  // События
  on: {
    // Событие инициализации
    init: function () {
      console.log("Слайдер запущен");
    },
    // Событие смены слайда
    slideChange: function () {
      console.log("Слайд переключен");
    },
  },
});

const textSlider = new Swiper(".text-slider", {
  // количество слайдов для показа
  slidesPerView: 3,
  //  Отступ между слайдами
  spaceBetween: 30,
});

// Передача управления с одного слайдера на другой
imageSlider.controller.control = textSlider;
textSlider.controller.control = imageSlider;

new Swiper(".parallax-slider", {
  // Вкл параллакс
  parallax: true,
  // Скорость переключения
  speed: 2000,

  // стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".virtual-slider", {
  // стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Формирование виртуальных слайдов
  // если слайды добавляются не вручную, а автоматически
  // заранее неизвестно, сколько всего слайдов
  virtual: {
    slides: (function () {
      let slide = [];
      for (let i = 0; i < 500; i++) {
        slide.push(`<div class="virtual-slider__text">Слайд №${i}</div>`);
      }
      return slide;
    })(),
  },
});

// СОБЫТИЯ
// Событие смены слайда
imageSlider.on("sladeChange", () => {
  console.log("Слайд переключен");
});

// Запуск автопрокрутки при наведении
const sliderblock = document.querySelector(".image-slider");

sliderblock.addEventListener("mouseover", function (e) {
  imageSlider.params.autoplay.disableOnInteraction = false;
  imageSlider.params.autoplay.delay = 500;
  imageSlider.params.autoplay.start();
});

sliderblock.addEventListener("mouseout", function () {
  imageSlider.autoplay.stop();
});

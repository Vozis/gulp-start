// Поддержка webp ================================================================
export const isWebp = function () {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
};

// Определение мобильного устройства: способ 2 ================================================================

// var isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function () {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function () {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function () {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function () {
//     return (
//       isMobile.Android() ||
//       isMobile.BlackBerry() ||
//       isMobile.iOS() ||
//       isMobile.Opera() ||
//       isMobile.Windows()
//     );
//   },
// };

// Определение мобильного устройства ================================================================
import isMobile from "ismobilejs";

if (isMobile(window.navigator).any) {
  document.querySelector("html").classList.add("_touch");
}

// Spollers ======================================================================
const spollersArray = document.querySelectorAll("[data-spollers]");
if (spollersArray.length > 0) {
  // Получение обычных споллеров
  const spollersRegular = Array.from(spollersArray).filter(function (
    item,
    index,
    self
  ) {
    return !item.dataset.spollers.split(",")[0];
  });
  // Инициализация обычных споллеров
  if (spollersRegular.length > 0) {
    initSpollers(spollersRegular);
  }

  // Получения споллеров с медиазапросами
  const spollersMedia = Array.from(spollersArray).filter(function (
    item,
    index,
    self
  ) {
    return item.dataset.spollers.split(",")[0];
  });

  // Инициализация споллеров с медиазапросами
  if (spollersMedia.length > 0) {
    const breakpointsArray = [];
    spollersMedia.forEach((item) => {
      const params = item.dataset.spollers;
      const breakpoint = {};
      const paramsArray = params.split(",");
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });

    // Получениу уникальных бреакпоинтов
    let mediaQueries = breakpointsArray.map(function (item) {
      return `(${item.type}-width: ${item.value}px),${item.value},${item.type}`;
    });
    mediaQueries = mediaQueries.filter(function (item, index, self) {
      return self.indexOf(item) === index;
    });

    // Работа с каждым бреакпоинтом
    mediaQueries.forEach((breakpoint) => {
      const paramsArray = breakpoint.split(",");
      const mediaBreakpoint = paramsArray[1];
      const mediaType = paramsArray[2];
      const matchMedia = window.matchMedia(paramsArray[0]);

      // Объекты с нужным условием
      const spollersArray = breakpointsArray.filter(function (item) {
        if (item.value === mediaBreakpoint && item.type === mediaType) {
          return true;
        }
      });
      // Событие
      matchMedia.addListener(function () {
        initSpollers(spollersArray, matchMedia);
      });
      initSpollers(spollersArray, matchMedia);
    });
  }
}

// Инициализация
function initSpollers(spollersArray, matchMedia = false) {
  spollersArray.forEach((spollersBlock) => {
    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
    if (matchMedia.matches || !matchMedia) {
      spollersBlock.classList.add("_init");
      initSpollerBody(spollersBlock);
      spollersBlock.addEventListener("click", setSpollerAction);
    } else {
      spollersBlock.classList.remove("_init");
      initSpollerBody(spollersBlock, false);
      spollersBlock.removeEventListener("click", setSpollerAction);
    }
  });
}

// Работа с контекстом

function initSpollerBody(spollersBlock, hideSpollerBody = true) {
  const spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
  if (spollerTitles.length > 0) {
    spollerTitles.forEach((spollerTitle) => {
      if (hideSpollerBody) {
        spollerTitle.removeAttribute("tabindex");
        if (!spollerTitle.classList.contains("_active")) {
          spollerTitle.nextElementSibling.hidden = true;
        }
      } else {
        spollerTitle.setAttribute("tabindex", "-1");
        spollerTitle.nextElementSibling.hidden = false;
      }
    });
  }
}
function setSpollerAction(e) {
  const el = e.target;
  if (el.hasAttribute("data-spoller") || el.closest("[data-spoller]")) {
    const spollerTitle = el.hasAttribute("data-spoller")
      ? el
      : el.closest("[data-spoller]");
    const spollersBlock = spollerTitle.closest("[data-spollers]");
    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller")
      ? true
      : false;
    if (!spollersBlock.querySelectorAll("_slide").length) {
      if (oneSpoller && !spollerTitle.classList.contains("_active")) {
        hideSpollersBody(spollersBlock);
      }
      spollerTitle.classList.toggle("_active");
      _slideToggle(spollerTitle.nextElementSibling, 500);
    }
    e.preventDefault();
  }
}

function hideSpollersBody(spollersBlock) {
  const spollerActiveTitle = spollersBlock.querySelector(
    "[data-spoller]._active"
  );
  if (spollerActiveTitle) {
    spollerActiveTitle.classList.remove("_active");
    _slideUp(spollerActiveTitle.nextElementSibling, 500);
  }
}

//=======================
let _slideUp = (target, duration = 500) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = true;
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
    }, duration);
  }
};

let _slideDown = (target, duration = 500) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    if (target.hidden) {
      target.hidden = false;
    }
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
    }, duration);
  }
};

let _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};

/* 
Для родителя споллеров атрибут data-spollers
Для заголовка споллеров атрибут data-spoller

Для вкл/ выкл работы на определенных размерах экрана
пищем параметры ширины экрана и тип медиа-запроса max / min

чтобы первоначально открыть любой споллер, к нему добавить клас  "_active"

Работа типа аккордеон 
для родителя задать атрибут data-one-spoller

*/

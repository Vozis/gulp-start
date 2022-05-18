"use strict";

import isMobile from "ismobilejs";

window.addEventListener("load", () => {
  document.addEventListener("click", documentActions);

  // Actions (делегирование события click)
  function documentActions(event) {
    const targetElement = event.target;
    if (window.innerWidth > 768 && isMobile(window.navigator).any) {
      if (targetElement.classList.contains("menu__arrow")) {
        targetElement.closest(".menu__list-item").classList.toggle("_hover");
      }
    }
    if (
      !targetElement.closest(".menu__list-item") &&
      document.querySelectorAll(".menu__list-item._hover").length > 0
    ) {
      document
        .querySelectorAll(".menu__list-item._hover")
        .forEach((el) => el.classList.remove("_hover"));
    }
    if (targetElement.classList.contains("search-form__icon")) {
      document.querySelector(".search-form").classList.toggle("_active");
    } else if (
      !targetElement.closest(".search-form") &&
      document.querySelector(".search-form._active")
    ) {
      document.querySelector(".search-form").classList.remove("_active");
    }
  }
});

// Burger ==================================================================
const menuBurger = document.querySelector(".icon-menu");
const menuEls = document.querySelectorAll(".menu__list-link");
let menuEl = document.querySelector(".menu__content");

menuBurger.addEventListener("click", () => {
  menuBurger.classList.toggle("_active");
  menuEl.classList.toggle("_active");
});

// Header

const headerEl = document.querySelector(".header");

const callback = function (entries, observer) {
  // if (!entries) {
  //   return;
  // }
  if (entries[0].isIntersecting) {
    headerEl.classList.remove("_scroll");
  } else {
    headerEl.classList.add("_scroll");
  }
};

const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerEl);

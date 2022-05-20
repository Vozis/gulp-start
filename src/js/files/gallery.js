/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/

// Подключение функционала "Чертогов Фрилансера"
import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { modulesList } from "./modulesList";

// Подключение базового набора функционала
import lightGallery from "lightgallery";

// Плагины
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
// import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.min.js'
// import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.min.js'

// Запуск
const galleries = document.querySelectorAll("[data-gallery]");
if (galleries.length) {
  let galleyItems = [];
  galleries.forEach((gallery) => {
    galleyItems.push({
      gallery,
      galleryClass: lightGallery(gallery, {
        // plugins: [lgZoom, lgThumbnail],
        licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
        speed: 500,
      }),
    });
  });
  // Добавляем в объект модулей
  modulesList.gallery = galleyItems;
}

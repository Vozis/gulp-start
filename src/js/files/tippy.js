// Подключение функционала "Чертогов Фрилансера"
import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { modulesList } from "./modulesList";

// Подключение из node_modules
import tippy from "tippy.js";

// Запускаем и добавляем в объект модулей
modulesList.tippy = tippy("[data-tippy-content]", {});

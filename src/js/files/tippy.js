// Подключение функционала "Чертогов Фрилансера"
import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { modulesList } from "../helpers/modulesList.js";

// Подключение из node_modules
import tippy from "tippy.js";

// Запускаем и добавляем в объект модулей
flsModules.tippy = tippy("[data-tippy-content]", {});

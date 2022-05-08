import {addBacklight, removeBacklight} from "./add-backlight-key";
import { onDownChangeLang, onUpChangeLang } from "./switch-language";

let keyboard = document.querySelector(".keyboard");


document.addEventListener("keydown", (evt) => {
  evt.preventDefault();
  let keyCode = evt.code;
  let key = keyboard.querySelector(`#${keyCode}`);

  addBacklight(keyCode, key, keyboard);
  onDownChangeLang(keyCode, keyboard);
});

document.addEventListener("keyup", (evt) => {
  let keyCode = evt.code;

  removeBacklight(keyCode, keyboard);
  onUpChangeLang(keyCode);
});

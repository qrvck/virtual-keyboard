import { addBacklight, removeBacklight } from "./add-backlight-key";
import { onDownChangeLang, onUpChangeLang } from "./switch-language";
import {outputKey} from "./output-key";

let keyboard = document.querySelector(".keyboard");
let output = document.querySelector(".output");


document.addEventListener("keydown", (evt) => {
  evt.preventDefault();
  let keyCode = evt.code;
  let key = keyboard.querySelector(`#${keyCode}`);

  addBacklight(keyCode, key, keyboard);
  onDownChangeLang(keyCode, keyboard);
  outputKey(key, output);
});

document.addEventListener("keyup", (evt) => {
  let keyCode = evt.code;

  removeBacklight(keyCode, keyboard);
  onUpChangeLang(keyCode);
});

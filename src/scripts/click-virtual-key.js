import {outputKey} from "./output-key";
import { addBacklight, removeBacklight } from "./add-backlight-key";

let keyboard = document.querySelector(".keyboard");
let output = document.querySelector(".output");

keyboard.addEventListener("mousedown", (evt) => {
  let key = evt.target.closest(".key");

  if (key) {
    outputKey(key, output);
    addBacklight(key.id, key, keyboard);
  }
});

keyboard.addEventListener("mouseup", (evt) => {
  let key = evt.target.closest(".key");

  if (key) {
    removeBacklight(key.id, keyboard);
  }
});
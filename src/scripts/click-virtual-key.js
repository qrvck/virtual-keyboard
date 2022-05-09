import {outputKey} from "./output-key";

let keyboard = document.querySelector(".keyboard");
let output = document.querySelector(".output");

keyboard.addEventListener("click", (evt) => {
  let key = evt.target.closest(".key");

  outputKey(key, output);
});
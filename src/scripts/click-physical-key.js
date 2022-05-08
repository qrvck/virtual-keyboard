import {onDownChangeLang, onUpChangeLang} from "./switch-language";

let keyboard = document.querySelector(".keyboard");


document.addEventListener("keydown", (evt) => {
  evt.preventDefault();
  let keyCode = evt.code;
  let key = keyboard.querySelector(`#${keyCode}`);

  if (keyboard.classList.contains("on-capslock") && (keyCode === "ShiftLeft" || keyCode === "ShiftRight")) {
    return;
  } else if (keyboard.classList.contains("on-shift") && keyCode === "CapsLock") {
    return;
  }

  if (keyCode === "CapsLock") {
    key.classList.toggle("active");
    keyboard.classList.toggle("on-capslock");
  } else if (keyCode === "ShiftLeft" || keyCode === "ShiftRight") {
    keyboard.classList.add("on-shift");
    key.classList.add("active");
  } else {
    key.classList.add("active");
  }

  // let innerText = key.innerText;
  // console.log(innerText);


  onDownChangeLang(keyCode, keyboard);
});


document.addEventListener("keyup", (evt) => {
  let keyCode = evt.code;
  if (keyCode === "CapsLock") return;
  if (keyCode === "ShiftLeft" || keyCode === "ShiftRight") keyboard.classList.remove("on-shift");
  let key = keyboard.querySelector(`#${keyCode}`);
  key.classList.remove("active");


  onUpChangeLang(keyCode);
});






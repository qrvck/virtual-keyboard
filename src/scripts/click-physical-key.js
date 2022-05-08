import {onDownChangeLang, onUpChangeLang} from "./switch-language";

let keyboard = document.querySelector(".keyboard");


document.addEventListener("keydown", (evt) => {
  evt.preventDefault();
  let keyCode = evt.code;
  let key = keyboard.querySelector(`#${keyCode}`);
  if (keyCode === "CapsLock") {
    key.classList.toggle("active");
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
  let key = keyboard.querySelector(`#${keyCode}`);
  key.classList.remove("active");


  onUpChangeLang(keyCode);
});






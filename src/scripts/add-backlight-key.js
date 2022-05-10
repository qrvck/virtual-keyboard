//changes the backlight of the keys when pressed and adds/removes classes for changing the language / changing the case when pressing shift, control, shift + control
function addBacklight(keyCode, key, keyboard) {

  if (keyCode === "CapsLock") {
    key.classList.toggle("active");
    keyboard.classList.toggle("on-capslock");
  } else if (keyCode === "ShiftLeft" || keyCode === "ShiftRight") {
    keyboard.classList.add("on-shift");
    key.classList.add("active");
  } else if (key) {
    key.classList.add("active");
  }

}

//changes the backlight of the keys when pressed and adds/removes classes for changing the language / changing the case when pressing shift, control, shift + control
function removeBacklight(keyCode, keyboard) {
  if (keyCode === "ShiftLeft" || keyCode === "ShiftRight") keyboard.classList.remove("on-shift");

  if (keyCode === "CapsLock") return;
  let key = keyboard.querySelector(`#${keyCode}`);
  if (key) key.classList.remove("active");
}

export { addBacklight, removeBacklight };
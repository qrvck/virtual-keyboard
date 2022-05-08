function addBacklight(keyCode, key, keyboard) {
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
}

function removeBacklight(keyCode, keyboard) {
  if (keyCode === "CapsLock") return;
  if (keyCode === "ShiftLeft" || keyCode === "ShiftRight") keyboard.classList.remove("on-shift");
  let key = keyboard.querySelector(`#${keyCode}`);
  key.classList.remove("active");
}

export {addBacklight, removeBacklight};
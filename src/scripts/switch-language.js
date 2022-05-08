let activeBtn = {
  ShiftLeft: false,
  AltLeft: false
};

function onDownChangeLang(keyCode, keyboard) {
  if (keyCode === "ShiftLeft" || keyCode === "AltLeft") {
    activeBtn[keyCode] = true;
    if (activeBtn["ShiftLeft"] && activeBtn["AltLeft"]) {
      keyboard.classList.toggle("russian");
      keyboard.classList.toggle("english");
    }
  }
}

function onUpChangeLang(keyCode) {
  if (keyCode === "ShiftLeft" || keyCode === "AltLeft") {
    activeBtn[keyCode] = false;
  }
}

export {onDownChangeLang, onUpChangeLang};
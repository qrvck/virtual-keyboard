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

      let lang = (keyboard.classList.contains("russian")) ? "russian" : "english";
      localStorage.setItem("lang", lang);
    }

  }
}


function onUpChangeLang(keyCode) {
  if (keyCode === "ShiftLeft" || keyCode === "AltLeft") {
    activeBtn[keyCode] = false;
  }
}

export {onDownChangeLang, onUpChangeLang};
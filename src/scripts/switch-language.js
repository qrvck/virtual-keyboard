let activeBtn = {
  ControlLeft: false,
  AltLeft: false
};


function onDownChangeLang(keyCode, keyboard) {
  if (keyCode === "ControlLeft" || keyCode === "AltLeft") {
    activeBtn[keyCode] = true;

    if (activeBtn["ControlLeft"] && activeBtn["AltLeft"]) {
      keyboard.classList.toggle("russian");
      keyboard.classList.toggle("english");

      let lang = (keyboard.classList.contains("russian")) ? "russian" : "english";
      localStorage.setItem("lang", lang);
    }

  }
}


function onUpChangeLang(keyCode) {
  if (keyCode === "ControlLeft" || keyCode === "AltLeft") {
    activeBtn[keyCode] = false;
  }
}

export {onDownChangeLang, onUpChangeLang};
let body = document.querySelector("body");
let dataOfBtns = [
  [ ["Backquote", [["Ё","Ё","ё","ё"], ["`","~","`","~"]]], ["Digit1", [["1","!","1","!"], ["1","!","1","!"]]], ["Digit2", [["2","&quot;","2","&quot;"], ["2","@","2","@"]]], ["Digit3", [["3","№","3","№"], ["3","#","3","#"]]], ["Digit4", [["4",";","4",";"], ["4","$","4","$"]]], ["Digit5", [["5","%","5","%"], ["5","%","5","%"]]], ["Digit6", [["6",":","6",":"], ["6","^","6","^"]]], ["Digit7", [["7","?","7","?"], ["7","&","7","&"]]], ["Digit8", [["8","*","8","*"], ["8","*","8","*"]]], ["Digit9", [["9","(","9","("], ["9","(","9","("]]], ["Digit0", [["0",")","0",")"], ["0",")","0",")"]]], ["Minus", [["-","_","-","_"], ["-","_","-","_"]]], ["Equal", [["=","+","=","+"], ["=","+","=","+"]]], ["Backspace", ["Backspace"]] ],
  [ ["Tab", ["Tab"]], ["KeyQ", [["Й","Й","й","й"], ["Q","Q","q","q"]]], [ "KeyW", [["Ц","Ц","ц","ц"], ["W","W","w","w"]]], [ "KeyE", [["У","У","у","у"], ["E","E","e","e"]]], ["KeyR", [["К","К","к","к"], ["R","R","r","r"]]], ["KeyT", [["Е","Е","е","е"], ["T","T","t","t"]]], ["KeyY", [["Н","Н","н","н"], ["Y","Y","y","y"]]], ["KeyU", [["Г","Г","г","г"], ["U","U","u","u"]]], ["KeyI", [["Ш","Ш","ш","ш"], ["I","I","i","i"]]], ["KeyO", [["Щ","Щ","щ","щ"], ["O","O","o","o"]]], ["KeyP", [["З","З","з","з"], ["P","P","p","p"]]], ["BracketLeft", [["Х","Х","х","х"], ["[","{","[","{"]]], ["BracketRight", [["Ъ","Ъ","ъ","ъ"], ["]","}","]","}"]]], ["Backslash", [["&#92;","/","&#92;","/"], ["&#92;","|","&#92;","|"]]], ["Delete", ["Del"]] ],
  [ ["CapsLock", ["CapsLk"]], ["KeyA", [["Ф","Ф","ф","ф"], ["A","A","a","a"]]], ["KeyS", [["Ы","Ы","ы","ы"], ["S","S","s","s"]]], ["KeyD", [["В","В","в","в"], ["D","D","d","d"]]], ["KeyF", [["А","А","а","а"], ["F","F","f","f"]]], ["KeyG", [["П","П","п","п"], ["G","G","g","g"]]], ["KeyH", [["Р","Р","р","р"], ["H","H","h","h"]]], ["KeyJ", [["О","О","о","о"], ["J","J","j","j"]]], ["KeyK", [["Л","Л","л","л"], ["K","K","k","k"]]], ["KeyL", [["Д","Д","д","д"], ["L","L","l","l"]]], ["Semicolon", [["Ж","Ж","ж","ж"], [";",":",";",":"]]], ["Quote", [["Э","Э","э","э"], ["'","&#34;","'","&#34;"]]], ["Enter", ["Enter"]] ],
  [ ["ShiftLeft", ["Shift"]], ["KeyZ", [["Я","Я","я","я"], ["Z","Z","z","z"]]], ["KeyX", [["Ч","Ч","ч","ч"], ["X","X","x","x"]]], ["KeyC", [["С","С","с","с"], ["C","C","c","c"]]], ["KeyV", [["М","М","м","м"], ["V","V","v","v"]]], ["KeyB", [["И","И","и","и"], ["B","B","b","b"]]], ["KeyN", [["Т","Т","т","т"], ["N","N","n","n"]]], ["KeyM", [["Ь","Ь","ь","ь"], ["M","M","m","m"]]], ["Comma", [["Б","Б","б","б"], [",","<",",","<"]]], ["Period", [["Ю","Ю","ю","ю"], [".",">",".",">"]]], ["Slash", [[".",",",".",","], ["/","?","/","?"]]], ["ArrowUp", ["▲"]], ["ShiftRight", ["Shift"]] ],
  [ ["ControlLeft", ["Ctrl"]], ["MetaLeft", ["Win"]], ["AltLeft", ["Alt"]], ["Space", [" "]], ["AltRight", ["Alt"]], ["ArrowLeft", ["◄"]], ["ArrowDown", ["▼"]], ["ArrowRight", ["►"]], ["ControlRight", ["Ctrl"]] ]
];


function createTextarea() {
  let textarea = document.createElement("textarea");
  textarea.classList.add("output");
  textarea.id = "output";
  return textarea;
}


function createRows(amount) {
  let rows = [];
  
  for (let i = 0; i < amount; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    rows.push(row);
  }
  
  return rows;
}


function createBtn(btn) {
  let key = document.createElement("div");
  let [id, data] = btn;
  
  
  if (data.length == 2) {
    key.classList.add("key");
    key.id = id;
    
    let langClassis = ["ru", "en"];
    let spanClassis = ["capslk", "shift", "lowercase", "caps-shift"];

    for (let i = 0; i < langClassis.length; i++) {
      let div = document.createElement("div");
      div.classList.add(langClassis[i]);
  
      for (let j = 0; j < spanClassis.length; j++) {
        let span = document.createElement("span");
        span.classList.add(spanClassis[j]);
        span.innerHTML = data[i][j];
        div.append(span);
      }
  
      key.append(div);
    }
  } else {
    key.classList.add("key");
    key.classList.add("func-key");
    key.classList.add(`func-key--${id.toLowerCase()}`);
    key.id = id;
    key.innerHTML = data[0];
  }

  return key;
}


function createKeyboard(dataOfBtns) {
  let keyboard = document.createElement("div");
  keyboard.classList.add("keyboard");

  if (!localStorage.getItem("lang")) {
    keyboard.classList.add("russian");
  } else {
    keyboard.classList.add(`${localStorage.getItem("lang")}`);
  }


  let rows = createRows(dataOfBtns.length);

  for (let i = 0; i < rows.length; i++) {
    
    for (let j = 0; j < dataOfBtns[i].length; j++) {
      let btn = createBtn(dataOfBtns[i][j]);
      rows[i].append(btn);
    }

  }

  keyboard.append(...rows);
  return keyboard;
}


function createInfo() {
  let wrapper = document.createElement("div");
  let text = [["клавиатура создана в операционной системе Windows"], ["для переключения языка нажмите левыe ctrl + alt"]];

  wrapper.classList.add("info-wrapper");

  for (let i = 0; i < text.length; i++) {
    let p = document.createElement("p");
    p.classList.add("info-text");
    p.innerHTML = text[i];
    wrapper.append(p);
  }

  return wrapper;
}

 
let textarea = createTextarea();
let keyboard = createKeyboard(dataOfBtns);
let info = createInfo();
body.append(textarea);
body.append(keyboard);
body.append(info);

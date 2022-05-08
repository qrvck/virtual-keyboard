let body = document.querySelector("body");
let dataOfBtns = [
  [ ["Backquote", [["Ё","Ё","ё"], ["`","~","`"]]], ["Digit1", [["1","!","1"], ["1","!","1"]]], ["Digit2", [["2","&quot;","2"], ["2","@","2"]]], ["Digit3", [["3","№","3"], ["3","#","3"]]], ["Digit4", [["4",";","4"], ["4","$","4"]]], ["Digit5", [["5","%","5"], ["5","%","5"]]], ["Digit6", [["6",":","6"], ["6","^","6"]]], ["Digit7", [["7","?","7"], ["7","&","7"]]], ["Digit8", [["8","*","8"], ["8","*","8"]]], ["Digit9", [["9","(","9"], ["9","(","9"]]], ["Digit0", [["0",")","0"], ["0",")","0"]]], ["Minus", [["-","_","-"], ["-","_","-"]]], ["Equal", [["=","+","="], ["=","+","="]]], ["Backspace", ["Backspace"]] ],
  [ ["Tab", ["Tab"]], ["KeyQ", [["Й","Й","й"], ["Q","Q","q"]]], [ "KeyW", [["Ц","Ц","ц"], ["W","W","w"]]], [ "KeyE", [["У","У","у"], ["E","E","e"]]], ["KeyR", [["К","К","к"], ["R","R","r"]]], ["KeyT", [["Е","Е","е"], ["T","T","t"]]], ["KeyY", [["Н","Н","н"], ["Y","Y","y"]]], ["KeyU", [["Г","Г","г"], ["U","U","u"]]], ["KeyI", [["Ш","Ш","ш"], ["I","I","i"]]], ["KeyO", [["Щ","Щ","щ"], ["O","O","o"]]], ["KeyP", [["З","З","з"], ["P","P","p"]]], ["BracketLeft", [["Х","Х","х"], ["[","{","["]]], ["BracketRight", [["Ъ","Ъ","ъ"], ["]","}","]"]]], ["Backslash", [["&#92;","/","&#92;"], ["&#92;","|","&#92;"]]], ["Delete", ["Del"]] ],
  [ ["CapsLock", ["CapsLk"]], ["KeyA", [["Ф","Ф","ф"], ["A","A","a"]]], ["KeyS", [["Ы","Ы","ы"], ["S","S","s"]]], ["KeyD", [["В","В","в"], ["D","D","d"]]], ["KeyF", [["А","А","а"], ["F","F","f"]]], ["KeyG", [["П","П","п"], ["G","G","g"]]], ["KeyH", [["Р","Р","р"], ["H","H","h"]]], ["KeyJ", [["О","О","о"], ["J","J","j"]]], ["KeyK", [["Л","Л","л"], ["K","K","k"]]], ["KeyL", [["Д","Д","д"], ["L","L","l"]]], ["Semicolon", [["Ж","Ж","ж"], [";",":",";"]]], ["Quote", [["Э","Э","э"], ["'","&#34;","'"]]], ["Enter", ["Enter"]] ],
  [ ["ShiftLeft", ["Shift"]], ["KeyZ", [["Я","Я","я"], ["Z","Z","z"]]], ["KeyX", [["Ч","Ч","ч"], ["X","X","x"]]], ["KeyC", [["С","С","с"], ["C","C","c"]]], ["KeyV", [["М","М","м"], ["V","V","v"]]], ["KeyB", [["И","И","и"], ["B","B","b"]]], ["KeyN", [["Т","Т","т"], ["N","N","n"]]], ["KeyM", [["Ь","Ь","ь"], ["M","M","m"]]], ["Comma", [["Б","Б","б"], [",","<",","]]], ["Period", [["Ю","Ю","ю"], [".",">","."]]], ["Slash", [[".",",","."], ["/","?","/"]]], ["ArrowUp", ["▲"]], ["ShiftRight", ["Shift"]] ],
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
    let spanClassis = ["capslk", "shift", "lowercase"];

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
  keyboard.classList.add("russian");


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
  let text = [["клавиатура создана в операционной системе Windows"], ["для переключения языка нажмите левыe shift + alt"]];

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

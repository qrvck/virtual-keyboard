function outputKey(key, output) {
  if (key) {
    let keyValue = key.innerText;

    if (keyValue === "CapsLk" || keyValue === "Shift" || keyValue === "Ctrl" || keyValue === "Win" || keyValue === "Alt") return;

    if (keyValue === "Tab") keyValue = "    ";
    if (keyValue === "") keyValue = " ";
    if (keyValue === "Enter") keyValue = "\n";

    if (keyValue === "Backspace") {
      if (output.selectionStart == 0) return;
      let pos = output.selectionStart;
      output.value = output.value.slice(0, output.selectionStart - 1) + output.value.slice(output.selectionStart, output.value.length);
      output.selectionStart = output.selectionEnd = pos - 1;
      return;
    }

    if (keyValue === "Del") {
      let pos = output.selectionStart;
      output.value = output.value.slice(0, output.selectionStart) + output.value.slice(output.selectionStart + 1, output.value.length);
      output.selectionStart = output.selectionEnd = pos;
      return;
    }

    output.setRangeText(keyValue, output.selectionStart, output.selectionEnd, "end");
  }
}

export {outputKey};
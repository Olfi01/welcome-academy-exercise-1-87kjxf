// Code for "show me the money"

function onClick() {
  const dollarImageVariable = document.getElementById('dollarImage');
  if (dollarImageVariable.style.visibility === 'visible') {
    dollarImageVariable.style.visibility = 'hidden';
  } else {
    dollarImageVariable.style.visibility = 'visible';
  }
  // TODO:  add code for exercise 1
  // Hint: look up the css property "display" to hide or show the banknote
}

// Code for "live update"
function onChange(value) {
  const test = document.getElementById('test');
  text.innerHTML = value;
  // TODO: add code for exercise 2
}

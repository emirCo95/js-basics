let productNameInputEl = document.getElementById('product');
let remainingCharsEl = document.getElementById('remaining-chars');

let maxAllowedChars = productNameInputEl.maxLength;

function updateRemainingChars(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;

  let remainingChars = maxAllowedChars - enteredTextLength;

  remainingCharsEl.textContent = remainingChars;
}

productNameInputEl.addEventListener('input', updateRemainingChars);

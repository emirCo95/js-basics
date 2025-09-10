let productNameInputEl = document.getElementById('product');
let remainingCharsEl = document.getElementById('remaining-chars');

let maxAllowedChars = productNameInputEl.maxLength;

function updateRemainingChars(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;

  let remainingChars = maxAllowedChars - enteredTextLength;

  remainingCharsEl.textContent = remainingChars;

  if (remainingChars <= 10) {
    remainingCharsEl.classList.add('warning');
    productNameInputEl.classList.add('warning');
  } else {
    remainingCharsEl.classList.remove('warning');
    productNameInputEl.classList.remove('warning');
  }
}

productNameInputEl.addEventListener('input', updateRemainingChars);

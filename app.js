let paragraphEl = document.querySelector('p');

function changeText() {
  paragraphEl.textContent = 'Clicked';
}

paragraphEl.addEventListener('click', changeText);

let inputEl = document.querySelector('input');

function retrieveUserInput(event) {
  //   let enteredText = inputEl.value;
  let enteredText = event.target.value;
  console.log(enteredText);
  console.log(event);
}

inputEl.addEventListener('input', retrieveUserInput);

// ADD AN ELEMENT
//1. CREATE THE NEW ELEMENT
let newAnchorEl = document.createElement('a');
newAnchorEl.href = 'https://google.com';
newAnchorEl.textContent = 'This leads to google!';
//2. GET ACCESS TO THE PARENT ELEMENT THAT SHOULD HOLD THE NEW ELEMENT
let firstParagraph = document.querySelector('p');
//3. INSERT THE NEW ELEMENT INTO THE PARENT ELEMENT CONTENT
firstParagraph.appendChild(newAnchorEl);

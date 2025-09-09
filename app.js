// ADD AN ELEMENT
//1. CREATE THE NEW ELEMENT
let newAnchorEl = document.createElement('a');
newAnchorEl.href = 'https://google.com';
newAnchorEl.textContent = 'This leads to google!';
//2. GET ACCESS TO THE PARENT ELEMENT THAT SHOULD HOLD THE NEW ELEMENT
let firstParagraph = document.querySelector('p');
//3. INSERT THE NEW ELEMENT INTO THE PARENT ELEMENT CONTENT
firstParagraph.appendChild(newAnchorEl);
// REMOVE ELEMENTS
//1.  SELECT THE ELEMENT THAT SHOULD BE REMOVED
let firstH1Element = document.querySelector('h1');
//2. RFEMOVE IT
firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element);

//MOVE ELEMENTS

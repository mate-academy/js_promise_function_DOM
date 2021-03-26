'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise((resolve) => {
    const text = `It was ${eventName} on the element: 
    ${element.nodeName}, id: ${element.id}.`;

    element.addEventListener(eventName, () => {
      resolve(text);
    });
  });
}

const printMessage = (message) => {
// write your code here
  const body = document.querySelector('body');
  const block = document.createElement('div');

  block.classList.add('message');
  block.innerText = message;

  body.append(block);
};

module.exports = {
  waitFor,
  printMessage,
};

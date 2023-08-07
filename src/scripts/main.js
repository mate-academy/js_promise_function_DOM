'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => addEventListener(eventName, () =>
    resolve('It was ' + eventName + ' on the element: '
  + element.nodeName + ', id: ' + 'element.id.'), {
    once: false,
  }));
}

let messageDisplayed = false;

const printMessage = (message) => {
  if (!messageDisplayed) {
    const messageDiv = document.createElement('div');

    messageDiv.classList.add('message');
    document.body.appendChild(messageDiv);
    messageDiv.textContent = message;

    messageDisplayed = true;
  }
};

module.exports = {
  waitFor,
  printMessage,
};

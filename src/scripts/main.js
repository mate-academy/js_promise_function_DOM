'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}`
        + `, id: ${element.id}`
      );
    });
  });
}

const messageDiv = document.createElement('div');
const form = document.querySelector('form');

form.append(messageDiv);

const printMessage = (message) => {
  messageDiv.classList.add('message');
  messageDiv.textContent = message;
};

module.exports = {
  waitFor,
  printMessage,
};

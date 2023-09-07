/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    });
  });
}

const printMessage = (message) => {
  const messageElement = document.createElement('div');

  messageElement.className = 'message';
  messageElement.textContent = message;

  const form = document.querySelector('form');

  form.appendChild(messageElement);
};

module.exports = {
  waitFor,
  printMessage,
};

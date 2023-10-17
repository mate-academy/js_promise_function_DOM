'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
      ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const messageDiv = document.createElement('div');

  messageDiv.textContent = message;
  messageDiv.classList.add('message');
  body.append(messageDiv);
};

module.exports = {
  waitFor,
  printMessage,
};

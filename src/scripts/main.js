'use strict';

const block = document.createElement('div');

document.querySelector('body').append(block);
block.style.display = `block`;
block.style.marginLeft = `10px`;

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      const message = `It was ${eventName}`
      + ` on the element: ${element.nodeName}, id: ${element.id}.`;

      resolve(message);
    });
  });
};

const printMessage = (message) => {
  const messageDiv = document.createElement('div');

  block.append(messageDiv);
  messageDiv.className = `message`;
  messageDiv.style.marginBottom = `4px`;
  messageDiv.innerText = `${message}`;
};

module.exports = {
  waitFor,
  printMessage,
};

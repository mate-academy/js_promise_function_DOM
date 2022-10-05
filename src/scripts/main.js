'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: ${element.nodeName},
      id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const messageElement = document.createElement('div');

  messageElement.className = 'message';
  messageElement.textContent = message;

  document.body.append(messageElement);
};

module.exports = {
  waitFor,
  printMessage,
};

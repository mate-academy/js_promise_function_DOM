'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const eventListener = () => {
      resolve(`It was ${eventName} on the element: ${element.nodeName},
      id: ${element.id}.`);
      element.removeEventListener(eventName, eventListener);
    };

    element.addEventListener(eventName, eventListener);
  });
}

const printMessage = (message) => {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
};

module.exports = {
  waitFor,
  printMessage,
};

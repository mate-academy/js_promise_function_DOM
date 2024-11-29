'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const eventHandler = () => {
      const message = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

      resolve(message);
      element.removeEventListener(eventName, eventHandler);
    };

    element.addEventListener(eventName, eventHandler);
  });
}

function printMessage(message) {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
}

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('input, button');

  elements.forEach((element) => {
    waitFor(element, 'click').then(printMessage);
    waitFor(element, 'input').then(printMessage);
    waitFor(element, 'blur').then(printMessage);
  });
});

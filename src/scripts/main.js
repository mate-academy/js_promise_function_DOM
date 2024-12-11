'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    if (!element) {
      return reject(new Error(`Element not found.`));
    }

    const elementName = element.nodeName || 'Unknown';
    const elementId = element.id || 'no-id';

    element.addEventListener(eventName, () => {
      const message = `It was ${eventName} on the element: ${elementName}, id: ${elementId}.`;

      resolve(message);
    });
  });
}

const printMessage = (message) => {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');
  messageDiv.textContent = message;

  document.body.appendChild(messageDiv);
};

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

waitFor(loginField, 'click').then(printMessage);
waitFor(passwordField, 'click').then(printMessage);
waitFor(button, 'click').then(printMessage);

waitFor(loginField, 'input').then(printMessage);
waitFor(passwordField, 'input').then(printMessage);

waitFor(loginField, 'blur').then(printMessage);
waitFor(passwordField, 'blur').then(printMessage);
waitFor(button, 'blur').then(printMessage);

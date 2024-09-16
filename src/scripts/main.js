'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      printMessage(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
      resolve();
    });
  });
}

const printMessage = (message) => {
  const messageElement = document.createElement('div');

  messageElement.classList.add('message');
  messageElement.textContent = message;
  document.body.appendChild(messageElement);
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

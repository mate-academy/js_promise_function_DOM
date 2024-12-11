'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, function handler(_event) {
      element.removeEventListener(eventName, handler);

      const message = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}`;

      resolve(message);
    });
  });
}

const printMessage = (message) => {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
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

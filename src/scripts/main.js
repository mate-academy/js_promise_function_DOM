'use strict';

function waitFor(element, eventName) {
  const promise = new Promise((resolve) => {
    const evt = () => {
      element.removeEventListener(eventName, evt);

      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    };

    if (!element || typeof element.addEventListener !== 'function') {
      return Promise.reject(new Error('Invalid element provided to waitFor'));
    }

    element.addEventListener(eventName, evt);
  });

  return promise;
}

const printMessage = (message) => {
  const messageElement = document.createElement('div');

  messageElement.className = 'message';
  document.body.appendChild(messageElement);
  messageElement.textContent = message;
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

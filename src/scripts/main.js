'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    if (!element || typeof element.addEventListener !== 'function') {
      reject(new Error('Invalid element provided'));

      return;
    }

    if (!eventName || typeof eventName !== 'string') {
      reject(new Error('Invalid eventName provided'));

      return;
    }

    function handler() {
      element.removeEventListener(eventName, handler);

      const message =
        `It was ${eventName} on the element: ` +
        `${element.nodeName}, id: ${element.id}.`;

      resolve(message);
    }

    element.addEventListener(eventName, handler);
  });
}

const printMessage = (message) => {
  const messageEl = document.createElement('div');

  messageEl.className = 'message';
  messageEl.textContent = message;

  document.body.append(messageEl);
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

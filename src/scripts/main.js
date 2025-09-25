'use strict';

function waitFor(element, eventName) {
  if (!element || typeof element.addEventListener !== 'function') {
    throw new TypeError(
      'Invalid element provided to waitFor: expected an EventTarget with ' +
        'addEventListener',
    );
  }

  return new Promise((resolve) => {
    function handler() {
      element.removeEventListener(eventName, handler);

      const msg = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

      resolve(msg);
    }
    element.addEventListener(eventName, handler);
  });
}

const printMessage = (message) => {
  const msgDiv = document.createElement('div');

  msgDiv.className = 'message';
  msgDiv.textContent = message;
  document.body.appendChild(msgDiv);
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

window.waitFor = waitFor;
window.printMessage = printMessage;

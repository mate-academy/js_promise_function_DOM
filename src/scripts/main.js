'use strict';

function waitFor(element, eventName) {
  if (!element) {
    return Promise.reject(
      new Error(`Element not found for event: ${eventName}`),
    );
  }

  return new Promise((resolve) => {
    function handler(ev) {
      element.removeEventListener(eventName, handler);

      const message = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

      resolve(message);
    }

    element.addEventListener(eventName, handler);
  });
}

const printMessage = (message) => {
  const d1v = document.createElement('div');

  d1v.classList.add('message');
  d1v.textContent = message;
  document.body.appendChild(d1v);
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
export { waitFor, printMessage };

'use strict';

function waitFor(element, eventName) {
  // write your code here
  return new Promise((resolve, reject) => {
    if (!(element instanceof HTMLElement)) {
      reject(new Error('First argument must be a valid DOM element'));

      return;
    }

    if (typeof eventName !== 'string') {
      reject(new Error('Second argument must be a valid event name (string)'));

      return;
    }

    const handler = () => {
      element.removeEventListener(eventName, handler);

      resolve(`
        It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`);
    };

    element.addEventListener(eventName, handler);
  });
}

const printMessage = (message) => {
  // write your code here
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

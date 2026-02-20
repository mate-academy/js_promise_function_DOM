'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    if (!element) {
      reject(new Error('Element is required'));
    }

    function handler() {
      const text = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

      resolve(text);
    }
    element.addEventListener(eventName, handler, { once: true });
  });
}

const printMessage = (message) => {
  const block = document.createElement('div');

  block.classList.add('message');
  block.textContent = message;
  document.body.appendChild(block);
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

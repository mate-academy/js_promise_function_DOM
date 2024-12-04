/* eslint-disable max-len */
/* eslint-disable no-template-curly-in-string */
'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  const resolveMessage = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

  return new Promise((resolve) => {
    switch (eventName) {
      case 'click':
        return element.addEventListener('click', () => {
          resolve(resolveMessage);
        });

      case 'contextmenu':
        return element.addEventListener('contextmenu', () => {
          resolve(resolveMessage);
        });

      case 'blur':
        return element.addEventListener('blur', () => {
          resolve(resolveMessage);
        });

      default:
        return 0;
    }
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerText = message;

  body.appendChild(div);
};

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

waitFor(loginField, 'click').then(printMessage);
waitFor(passwordField, 'click').then(printMessage);
waitFor(button, 'click').then(printMessage);

waitFor(loginField, 'contextmenu').then(printMessage);
waitFor(passwordField, 'contextmenu').then(printMessage);

waitFor(loginField, 'blur').then(printMessage);
waitFor(passwordField, 'blur').then(printMessage);
waitFor(button, 'blur').then(printMessage);

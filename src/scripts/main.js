'use strict';

function waitFor(element, eventName) {
  const promise1 = new Promise((resolve, reject) => {
    element.addEventListener(eventName, (ev) => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    });
  });

  return promise1;
}

const printMessage = (message) => {
  const messagePrint = document.createElement('div');

  messagePrint.classList.add('message');
  messagePrint.textContent = message;

  document.body.appendChild(messagePrint);
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

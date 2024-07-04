'use strict';

const div = document.createElement('div');

div.className = 'message';
document.body.appendChild(div);

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    if (element && eventName) {
      element.addEventListener(eventName, () => {
        resolve(
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        );
      });
    }
  });
}

const printMessage = (message) => {
  div.innerHTML = message;
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

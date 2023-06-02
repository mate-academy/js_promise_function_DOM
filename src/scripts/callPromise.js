'use strict';

function waitFor(element, evnt) {
  return new Promise((resolve) => {
    element.addEventListener(evnt, () => {
      resolve(`Event '${evnt}' occurred on element '${element.id}'`);
    });
  });
}

function printMessage(message) {
  const notification = document.createElement('div');

  notification.textContent = message;
  document.body.appendChild(notification);
}

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

const loginInput = document.querySelector('#login');

waitFor(loginInput, 'click').then((message) => {
  printMessage(message);
});

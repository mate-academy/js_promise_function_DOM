'use strict';

function waitFor(element, eventName) {
  const executor = (reslove) => {
    element.addEventListener(eventName, () => {
      reslove(
        `It was ${eventName} on the element:
         ${element.nodeName}, id: ${element.id}.`,
      );
    });
  };

  return new Promise(executor);
}

const printMessage = (message) => {
  // write your code here
  const box = document.createElement('div');

  box.className = 'message';
  box.textContent = message;

  document.body.appendChild(box);
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

'use strict';

function waitFor(element, eventName) {
  const waitPromise = new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`,
      );
    });
  });

  return waitPromise;
}

const printMessage = (message) => {
  const newElement = document.createElement('div');

  newElement.className = 'message';
  newElement.textContent = message;
  document.body.append(newElement);
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

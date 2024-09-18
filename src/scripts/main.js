'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    const message = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

    element.addEventListener(eventName, () => {
      resolve(message);
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  div.classList.add('message');
  div.textContent = message;

  body.append(div);
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

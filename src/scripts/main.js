'use strict';

function waitFor(element, eventName) {
  if (!(element instanceof Node)) {
    return;
  }

  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    });
  });
}

const printMessage = (message) => {
  const body = document.querySelector('body');

  if (body.querySelector('.message') !== null) {
    body.querySelector('.message').innerText = message;
  } else {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.innerText = message;

    body.append(messageDiv);
  }
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

'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  const result = new Promise((resolve, reject) => {
    const message = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

    element.addEventListener(eventName, () => resolve(message));
  });

  return result;
}

const printMessage = (message) => {
  const messageDiv = document.querySelector('div.message');

  if (messageDiv) {
    messageDiv.textContent = message;
  } else {
    const newDiv = document.createElement('div');

    newDiv.setAttribute('class', 'message');
    newDiv.textContent = message;
    body.append(newDiv);
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

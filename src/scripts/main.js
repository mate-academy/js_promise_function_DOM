'use strict';

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const handler = () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}`,
      );
      element.removeEventListener(eventName, handler);
    };

    element.addEventListener(eventName, handler);
  });
}

const printMessage = (text) => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = text;
  document.body.appendChild(message);
};

waitFor(loginField, 'click').then(printMessage);
waitFor(passwordField, 'click').then(printMessage);
waitFor(button, 'click').then(printMessage);

waitFor(loginField, 'input').then(printMessage);
waitFor(passwordField, 'input').then(printMessage);

waitFor(loginField, 'blur').then(printMessage);
waitFor(passwordField, 'blur').then(printMessage);
waitFor(button, 'blur').then(printMessage);

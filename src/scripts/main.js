'use strict';

function waitFor(element, eventName) {
  if (
    !element ||
    typeof element.addEventListener !== 'function' ||
    typeof eventName !== 'string' ||
    eventName.trim() === ''
  ) {
    throw new Error('Invalid arguments');
  }

  return new Promise((resolve) => {
    element.addEventListener(
      eventName,
      (e) => {
        const target = e.currentTarget;

        resolve(
          `It was ${eventName} on the element: ${target.nodeName}, id: ${target.id}.`,
        );
      },
      { once: true },
    );
  });
}

function printMessage(message) {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;
  document.body.appendChild(div);
}

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

waitFor(loginField, 'click').then(printMessage);
waitFor(loginField, 'input').then(printMessage);
waitFor(loginField, 'blur').then(printMessage);

waitFor(passwordField, 'click').then(printMessage);
waitFor(passwordField, 'input').then(printMessage);
waitFor(passwordField, 'blur').then(printMessage);

waitFor(button, 'click').then(printMessage);
waitFor(button, 'blur').then(printMessage);

'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(
      eventName,
      () => {
        const message = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

        resolve(message);
      },
      { once: true },
    );
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;
  document.body.appendChild(div);
};

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

if (loginField) {
  waitFor(loginField, 'click').then(printMessage);
}

if (passwordField) {
  waitFor(passwordField, 'click').then(printMessage);
}

if (button) {
  waitFor(button, 'click').then(printMessage);
}

if (loginField) {
  waitFor(loginField, 'input').then(printMessage);
  waitFor(loginField, 'blur').then(printMessage);
}

if (passwordField) {
  waitFor(passwordField, 'input').then(printMessage);
  waitFor(passwordField, 'blur').then(printMessage);
}

if (button) {
  waitFor(button, 'blur').then(printMessage);
}

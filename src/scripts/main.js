'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const eventHandler = (e) => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    };

    if (element && eventName) {
      element.addEventListener(eventName, eventHandler, { once: true });
    }
  });
}

const printMessage = (message) => {
  const body = document.body;
  const div = document.createElement('div');

  div.classList.add('message');
  div.append(message);
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

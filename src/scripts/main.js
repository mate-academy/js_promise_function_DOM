'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    if (!(element instanceof Element)) {
      reject(new Error('The passed value is not a DOM element'));

      return;
    }

    if (!eventName) {
      reject(new Error('Event name is missing'));

      return;
    }

    element.addEventListener(
      eventName,
      () => {
        resolve(
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        );
      },
      { once: true },
    );
  });
}

const printMessage = (message) => {
  if (message === null) {
    return;
  }

  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;

  document.body.append(div);
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

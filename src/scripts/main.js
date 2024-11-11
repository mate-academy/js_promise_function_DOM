'use strict';

function waitFor(element, eventName) {
  // eslint-disable-next-line no-shadow

  return new Promise((resolve) => {
    // eslint-disable-next-line no-shadow
    element.addEventListener(eventName, function (event) {
      event.preventDefault();

      if (event) {
        resolve(
          `${eventName} on the element: ${element.nodeName}, id: ${element.id}`,
        );
      }
    });
  });
}

const printMessage = (message) => {
  const createElementDiv = document.createElement('div');

  createElementDiv.classList.add('message');
  createElementDiv.textContent = message;
  document.body.append(createElementDiv);
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

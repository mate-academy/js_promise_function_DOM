'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    const eventHandler = () => {
      resolve(
        // eslint-disable-next-line max-len
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
      element.removeEventListener(eventName, eventHandler);
    };

    element.addEventListener(eventName, eventHandler);
  });
}

const printMessage = (message) => {
  const divElement = document.createElement('div');

  divElement.className = 'message';
  divElement.innerText = message;
  document.body.appendChild(divElement);
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

const body = document.querySelector('body');

body.style.columnGap = '10px';

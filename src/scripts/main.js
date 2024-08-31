'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const resolver = () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );

      element.removeEventListener(eventName, resolver);
    };

    element.addEventListener(eventName, resolver);
  });
}

const printMessage = (message) => {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('beforeend', `<div class="message">${message}</div>`);
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

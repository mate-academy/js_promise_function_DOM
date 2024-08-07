'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const eventFunc = () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
      element.removeEventListener(eventName, eventFunc);
    };

    element.addEventListener(eventName, eventFunc);
  });
}

const printMessage = (message) => {
  const notification = document.createElement('div');

  notification.classList.add('message');
  notification.textContent = message;
  body.append(notification);
};

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');
const body = document.querySelector('body');

waitFor(loginField, 'click').then(printMessage);
waitFor(passwordField, 'click').then(printMessage);
waitFor(button, 'click').then(printMessage);

waitFor(loginField, 'input').then(printMessage);
waitFor(passwordField, 'input').then(printMessage);

waitFor(loginField, 'blur').then(printMessage);
waitFor(passwordField, 'blur').then(printMessage);
waitFor(button, 'blur').then(printMessage);

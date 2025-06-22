'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    function handler() {
      element.removeEventListener(eventName, handler);

      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    }
    element.addEventListener(eventName, handler);
  });
}

const printMessage = (message) => {
  const notification = document.createElement('div');

  notification.textContent = message;
  notification.classList.add('message');
  document.body.append(notification);
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

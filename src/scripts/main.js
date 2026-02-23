'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    function handler(e) {
      const message = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

      element.removeEventListener(eventName, handler);
      resolve(message);
    }

    element.addEventListener(eventName, handler);
  });
}

const printMessage = (message) => {
  const element = document.createElement('div');

  element.className = 'message';
  element.textContent = message;
  document.body.appendChild(element);
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

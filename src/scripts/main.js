'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    const eventListener = () => {
      const message = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

      resolve(message);
      element.removeEventListener(eventName, eventListener);
    };

    element.addEventListener(eventName, eventListener);
  });
}

const printMessage = (message) => {
  const messageelem = document.createElement('div');

  messageelem.classList.add('message');
  messageelem.textContent = message;
  document.body.append(messageelem);
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

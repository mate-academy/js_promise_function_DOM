'use strict';

function waitFor(element, eventName) {
  if (!element || typeof element.addEventListener !== 'function') {
    throw new Error('Invalid element passed');
  }
  return new Promise((resolve) => {
    const handleEv = () => {
      element.removeEventListener(eventName, handleEv);

      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    };

    element.addEventListener(eventName, handleEv);
  });
}

const printMessage = (message) => {
  const messageEl = document.createElement('div');

  messageEl.className = 'message';
  messageEl.textContent = message;

  document.body.append(messageEl);
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

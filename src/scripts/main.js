'use strict';

function waitFor(element, eventName) {
  if (!element || typeof element.addEventListener !== 'function') {
    return Promise.reject(
      new TypeError(
        'waitFor: element must be an EventTarget with addEventListener',
      ),
    );
  }

  if (typeof eventName !== 'string' || eventName.trim() === '') {
    return Promise.reject(
      new TypeError('waitFor: eventName must be a non-empty string'),
    );
  }

  return new Promise((resolve) => {
    const handler = () => {
      element.removeEventListener(eventName, handler);

      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    };

    element.addEventListener(eventName, handler, { once: true });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
};

document.addEventListener('DOMContentLoaded', () => {
  const loginField = document.getElementById('login');
  const passwordField = document.getElementById('password');
  const button = document.getElementById('submit');

  if (loginField) {
    waitFor(loginField, 'click').then(printMessage);
    waitFor(loginField, 'input').then(printMessage);
    waitFor(loginField, 'blur').then(printMessage);
  }

  if (passwordField) {
    waitFor(passwordField, 'click').then(printMessage);
    waitFor(passwordField, 'input').then(printMessage);
    waitFor(passwordField, 'blur').then(printMessage);
  }

  if (button) {
    waitFor(button, 'click').then(printMessage);
    waitFor(button, 'blur').then(printMessage);
  }
});

window.waitFor = waitFor;
window.printMessage = printMessage;

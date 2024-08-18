'use strict';

function waitFor(element, eventName) {
  return new Promise(function (resolve, reject) {
    if (!element || !eventName) {
      reject(new Error('Element or event name not provided'));
    } else {
      element.addEventListener(eventName, function handler(e) {
        element.removeEventListener(eventName, handler);

        resolve(
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        );
      });
    }
  });
}

const printMessage = (message) => {
  const el = document.createElement('div');

  el.classList.add('message');
  el.textContent = message;
  document.body.append(el);
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

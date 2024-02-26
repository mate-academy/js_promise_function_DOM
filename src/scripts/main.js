'use strict';

function waitFor(element, eventName) {
  // write your code here
  let message = `It was ${eventName} `;

  message += `on the element: ${element.nodeName}, `;
  message += `id: ${element.id}.`;

  const resolver = resolve => {
    element.addEventListener(eventName, () => {
      resolve(message);
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  // write your code here
  const element = document.createElement('DIV');

  element.className = 'message';
  element.innerHTML = message;
  document.body.append(element);
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

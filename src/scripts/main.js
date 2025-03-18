'use strict';

function waitFor(element, eventName) {
  // write your code here
  return new Promise((resolve) => {
    // eslint-disable-next-line no-unused-vars
    const handler = () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    };

    element.removeEventListener(eventName, handler);

    element.addEventListener(eventName, handler);
  });
}

const printMessage = (message) => {
  // write your code here
  const messDiv = document.createElement('div');

  messDiv.classList.add('message');
  messDiv.textContent = message;

  document.body.appendChild(messDiv);
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

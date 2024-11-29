'use strict';

function waitFor(element, eventName) {
  // write your code here
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      const message = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}`;

      resolve(message);
    });
  });
}

const printMessage = (message) => {
  // write your code here
  const div = document.createElement('div');

  div.innerText = message;
  div.classList.add('message');
  document.body.prepend(div);
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

'use strict';

const body = document.getElementsByTagName('body')[0];

function waitFor(element, eventName) {
  // write your code here
  return new Promise((resolve) => {
    element.addEventListener('click', (e) => {
      const msg = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

      printMessage(msg);
    });
  });
}

const printMessage = (message) => {
  // write your code here
  const div = document.createElement('div');

  div.innerText = message;
  div.className = 'message';
  body.appendChild(div);
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

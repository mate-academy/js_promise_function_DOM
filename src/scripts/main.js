'use strict';

function waitFor(element, eventName) {
  // write your code here

  document.body.style.flexDirection = 'column';
  document.body.style.gap = '30px';

  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    });
  });
}

const printMessage = (message) => {
  // write your code here
  const newDiv = document.createElement('div');

  newDiv.className = 'message';
  newDiv.textContent = message;

  document.body.appendChild(newDiv);
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

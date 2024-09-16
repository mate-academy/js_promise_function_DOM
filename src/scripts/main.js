'use strict';

function waitFor(element, eventName) {
  // write your code here

  const promise = new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      resolve(
        `It was ${eventName} on the element: ${e.target.nodeName}, id: ${e.target.id}.`,
      );
    });
  });

  return promise;
}

const printMessage = (message) => {
  // write your code here
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;
  document.body.append(div);
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

'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    });
  });
}

function printMessage1(message) {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;

  document.forms[0].append(div);
}

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

waitFor(loginField, 'click').then(printMessage1);
waitFor(passwordField, 'click').then(printMessage1);
waitFor(button, 'click').then(printMessage1);

waitFor(loginField, 'input').then(printMessage1);
waitFor(passwordField, 'input').then(printMessage1);

waitFor(loginField, 'blur').then(printMessage1);
waitFor(passwordField, 'blur').then(printMessage1);
waitFor(button, 'blur').then(printMessage1);

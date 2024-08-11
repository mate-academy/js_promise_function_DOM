'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      if (e.target === element) {
        resolve(
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        );
      }
    });
  });
}

const printMessage = (message) => {
  const newDiv = document.createElement('div');

  newDiv.className = 'message';
  newDiv.textContent = message;
  newDiv.style.position = 'fixed';
  newDiv.style.width = '400px';
  document.body.append(newDiv);
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

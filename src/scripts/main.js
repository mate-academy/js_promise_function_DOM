'use strict';

const div = document.createElement('div');

div.style.cssText = `display:flex; flex-direction: column; row-gap: 10px; padding-left: 10px`;
document.body.append(div);

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      resolve(`It was ${eventName} on the element: ${element.nodeName}`);
    });
  });
}

const printMessage = (message) => {
  const addMessage = document.createElement('div');

  addMessage.classList.add('message');
  addMessage.textContent = message;
  div.append(addMessage);
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

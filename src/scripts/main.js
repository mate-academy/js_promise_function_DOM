'use strict';

function waitFor(element, eventName) {
  const promise = new Promise((resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      resolve(`It was ${eventName}
        on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  });

  return promise;
}

const printMessage = (message) => {
  const body = document.querySelector('body');
  const messageElement = document.createElement('div');
  const textElement = document.createElement('p');

  messageElement.classList.add('message');

  textElement.textContent = message;
  messageElement.appendChild(textElement);
  body.append(messageElement);
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

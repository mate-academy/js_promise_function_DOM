'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    const clickHandler = () => {
      document.removeEventListener(eventName, clickHandler);

      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    };

    element.addEventListener(eventName, clickHandler);
  });
}

const printMessage = (message) => {
  const messageElem = document.createElement('div');

  messageElem.classList.add('message');
  messageElem.innerText = message;

  const body = document.querySelector('body');

  body.appendChild(messageElem);
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

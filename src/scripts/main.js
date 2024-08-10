'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, function (e) {
      if (
        e.target.id === element.id &&
        (eventName === 'click' || eventName === 'input' || eventName === 'blur')
      ) {
        resolve(
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        );
      }
    });
  });
}

function printMessage(message) {
  const messageElement = document.createElement('div');
  const body = document.body;

  body.style.display = 'flex';
  body.style.flexDirection = 'column';
  messageElement.style.marginTop = '20px';

  messageElement.className = 'message';
  messageElement.textContent = message;

  body.firstElementChild.after(messageElement);
}

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

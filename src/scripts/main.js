'use strict';

const body = document.querySelector('body');

body.style.columnGap = '5px';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      resolve(
        `It was ${eventName}
        on the element: ${element.nodeName},
        id: ${element.id}.`,
      );
    });
  });
}

const printMessage = (message) => {
  const messageBlock = document.createElement('div');

  messageBlock.className = 'message';
  messageBlock.textContent = message;

  document.querySelector('body').append(messageBlock);
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

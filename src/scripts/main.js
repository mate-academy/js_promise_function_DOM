'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const handleEvent = () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}`,
      );
      element.removeEventListener(eventName, handleEvent);
    };

    element.addEventListener(eventName, handleEvent);
  });
}

const messageContainer = document.createElement('div');

messageContainer.classList.add('message-container');
document.body.appendChild(messageContainer);

const printMessage = (message) => {
  const messageEl = document.createElement('div');

  messageEl.classList.add('message');
  messageEl.textContent = message;

  messageContainer.appendChild(messageEl);
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

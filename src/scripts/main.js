'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(
      eventName,
      () => {
        resolve(
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        );
      },
      { once: true },
    );
  });
}

function printMessage(message) {
  const messageElement = document.createElement('div');

  messageElement.className = 'message';
  messageElement.textContent = message;

  document.body.append(messageElement);
}

const login = document.querySelector('#login');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

waitFor(login, 'click').then(printMessage);
waitFor(login, 'input').then(printMessage);
waitFor(login, 'blur').then(printMessage);

waitFor(password, 'click').then(printMessage);
waitFor(password, 'input').then(printMessage);
waitFor(password, 'blur').then(printMessage);

waitFor(submit, 'click').then(printMessage);
waitFor(submit, 'blur').then(printMessage);

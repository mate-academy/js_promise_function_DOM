'use strict';

function waitFor(element, eventName) {
  if (!element || typeof element.addEventListener !== 'function') {
    return Promise.reject(new Error('...'));
  }

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

const buttons = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');

const buttonArray = Array.from(buttons);
const inputArray = Array.from(inputs);

const events = ['click', 'input', 'blur'];

function printMessage(message) {
  const div = document.createElement('div');

  div.textContent = message;
  div.className = 'message';
  document.body.append(div);
}

buttonArray.forEach((el) => {
  events.forEach((eventName) => {
    waitFor(el, eventName).then((message) => {
      printMessage(message);
    });
  });
});

inputArray.forEach((el) => {
  events.forEach((eventName) => {
    waitFor(el, eventName).then((message) => {
      printMessage(message);
    });
  });
});

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

'use strict';

function waitFor(element, eventName) {
  const promise = new Promise((resolve, reject) => {
    const callback = (e) => {
      resolve(
        `It was ${eventName} on the element: ${element.tagName}, id: ${element.id}.`,
      );
      element.removeEventListener(`${eventName}`, callback);
    };

    element.addEventListener(`${eventName}`, callback);
  });

  return promise;
}

const printMessage = (message) => {
  const body = document.querySelector('body');
  const newDiv = document.createElement('div');

  newDiv.classList.add('message');
  newDiv.textContent = message;

  body.append(newDiv);
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

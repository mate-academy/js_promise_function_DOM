'use strict';

function waitFor(element, eventName) {
  const promise = new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      return resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}`,
      );
    });
  });

  return promise;
}

const printMessage = (message) => {
    const body = document.querySelector('body');
    const mes = document.createElement('div');
    mes.className = 'message';
    mes.innerText = message;
    body.append(mes);
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

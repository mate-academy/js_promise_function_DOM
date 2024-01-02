'use strict';

function waitFor(element, eventName) {
  const divElement = document.getElementById(element);

  return new Promise(function(resolve, reject) {
    divElement.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
       ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const formElement = document.querySelector('form');

  formElement.className('message');
  formElement.insertAdjacentHTML('afterbegin', `<div>${message}</div>`);
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

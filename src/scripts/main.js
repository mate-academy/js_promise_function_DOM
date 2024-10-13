'use strict';

const form = document.querySelector('form');

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    if (element) {
      element.addEventListener(eventName, () => {
        const string = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

        resolve(string);
      });
    } else{
      reject(new Error('Element doesn\'t exist'));
    }
  });
}

const messageDiv = document.createElement('div');
messageDiv.classList.add('message');
messageDiv.style.display = 'none';
const printMessage = (message) => {
  messageDiv.innerText = message;
  messageDiv.style.display = 'block';
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

form.append(messageDiv);

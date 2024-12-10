'use strict';

function waitFor(element, eventName) {
  const ev = eventName;
  return new Promise ((resolve, reject) => {
    element.addEventListener(ev, () => {
      resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`);
    })
  })
  }


const printMessage = (message) => {
  const createMessage = document.createElement('div');
  createMessage.innerText = message;
  createMessage.className = 'message';
  document.body.appendChild(createMessage);
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

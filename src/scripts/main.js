'use strict';

function waitFor(element, eventName) {
  const prom = new Promise((resolve) => {
    element.addEventListener(eventName, function () {
      const message = `It was ${eventName} 
        on the element: ${element.nodeName}, id: ${element.id}.`;

      resolve(message);
    });
  });

  return prom;
}

const printMessage = (message) => {
  const body = document.querySelector('body');
  const mess = document.createElement('div');

  mess.className = 'message';
  mess.textContent = message;
  body.append(mess);
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

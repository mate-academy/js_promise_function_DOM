'use strict';

let i = 0;

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      const { nodeName, id } = element;

      resolve(`It was ${eventName} on the element: ${nodeName}, id: ${id}.`);
    });
  });
}

const printMessage = (message) => {
  i += 1;

  document.body.insertAdjacentHTML('beforeend', `
    <div class="message message--${i}">${message}</div>
  `);
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

'use strict';

const body = document.querySelector('body');

body.style.flexDirection = 'column';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      if (e.target === element) {
        resolve(`
          It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.
        `);
      }
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  div.style.margin = '10px';
  div.style.opacity = '1';
  div.style.transition = 'opacity 0.5s ease';

  body.prepend(div);

  setTimeout(() => {
    div.style.opacity = '0';

    setTimeout(() => {
      div.remove();
    }, 500);
  }, 3000);
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

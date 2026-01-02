'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(
      eventName,
      (e) => {
        const target = e.currentTarget;

        resolve(
          `It was ${eventName} on the element: ${target.nodeName}, id: ${target.id}.`,
        );
      },
      { once: true },
    );
  });
}

const printMessage = (message) => {
  const n = document.createElement('div');

  n.classList.add('message');

  const p = document.createElement('p');

  p.textContent = message;
  n.appendChild(p);
  document.body.appendChild(n);
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

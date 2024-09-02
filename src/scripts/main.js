'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const handler = (e) => {
      element.removeEventListener(eventName, handler);

      const safeId = element.id.replace(/</g, '&lt;').replace(/>/g, '&gt;');

      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${safeId}.`,
      );
    };

    element.addEventListener(eventName, handler);
  });
}

const printMessage = (message) => {
  const fragment = document.createDocumentFragment();
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;

  fragment.appendChild(div);
  document.body.appendChild(fragment);
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

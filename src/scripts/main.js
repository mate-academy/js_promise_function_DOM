'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const handler = () => {
      const message = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

      // прибираємо слухач, щоб Promise виконався лише один раз
      element.removeEventListener(eventName, handler);

      resolve(message);
    };

    // додаємо слухач події
    element.addEventListener(eventName, handler);
  });
}

const printMessage = (message) => {
  // створюємо div
  const div = document.createElement('div');

  // додаємо клас
  div.className = 'message';

  // записуємо текст
  div.textContent = message;

  // додаємо в DOM
  document.body.appendChild(div);
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

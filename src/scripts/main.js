'use strict';

function waitFor(element, eventName) {
  if (!element) {
    return Promise.reject(new Error('element is required'));
  }

  return new Promise((resolve) => {
    const handler = () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    };

    element.addEventListener(eventName, handler, { once: true });
  });
}

function printMessage(message) {
  let container = document.querySelector('[data-qa="message-container"]');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('data-qa', 'message-container');
    document.body.appendChild(container);
  }

  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  container.appendChild(div);
}

document.addEventListener('DOMContentLoaded', () => {
  const loginField = document.getElementById('login');
  const passwordField = document.getElementById('password');
  const button = document.getElementById('submit');

  waitFor(loginField, 'click').then(printMessage).catch(printMessage);
  waitFor(loginField, 'input').then(printMessage).catch(printMessage);
  waitFor(loginField, 'blur').then(printMessage).catch(printMessage);

  waitFor(passwordField, 'click').then(printMessage).catch(printMessage);
  waitFor(passwordField, 'input').then(printMessage).catch(printMessage);
  waitFor(passwordField, 'blur').then(printMessage).catch(printMessage);

  waitFor(button, 'click').then(printMessage).catch(printMessage);
  waitFor(button, 'blur').then(printMessage).catch(printMessage);
});

window.waitFor = waitFor;
window.printMessage = printMessage;

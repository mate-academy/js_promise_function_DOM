'use strict';

/**
 * Waits for a specific event on a given element and
 * resolves a promise when the event occurs.
 * @param {HTMLElement} element Element to listen on
 * @param {string} eventName Event name to listen for
 * @returns {Promise<string>}
 */
function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const handler = () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    };

    element.addEventListener(eventName, handler, { once: true });
  });
}

/**
 * Appends a message to the document body inside a div with class 'message'.
 * @param {string} message Message to append
 */
const printMessage = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerText = message;

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

'use strict';

/**
 * @function waitFor
 * @param {HTMLElement} element
 * @param {string} eventName
 * @returns {Promise}
 */

function waitFor(element, eventName) {
  const message = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

  return new Promise((resolve) => {
    element.addEventListener(eventName, () => resolve(message));
  });
}

/**
 * @function printMessage
 * @param {*} message
 * @returns {void}
 */

const printMessage = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;
  document.body.append(div);
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

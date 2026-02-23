'use strict';

function waitFor(element, eventName) {
  // write your code here
  if (!element) {
    return Promise.reject(new Error('Element is missing'));
  }

  const safeEvent = String(eventName ?? '').trim();

  if (!safeEvent) {
    return Promise.reject(new Error('Event name is missing'));
  }

  return new Promise((resolve) => {
    function handler() {
      element.removeEventListener(safeEvent, handler);

      const nodeName = element.nodeName;
      const id = element.id || '';

      resolve(`It was ${safeEvent} on the element: ${nodeName}, id: ${id}.`);
    }

    element.addEventListener(safeEvent, handler);
  });
}

const printMessage = (message) => {
  // write your code here
  const text = String(message ?? '').trim();

  if (!text) {
    return;
  }

  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = text;

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

'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    return resolve(
      `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
    );
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  div.classList.add('message');
  div.textContent = message;

  body.append(div);
};

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

loginField.addEventListener('click', () => {
  waitFor(loginField, 'click').then(printMessage);
});

passwordField.addEventListener('click', () => {
  waitFor(passwordField, 'click').then(printMessage);
});

button.addEventListener('click', () => {
  waitFor(button, 'click').then(printMessage);
});

loginField.addEventListener('input', () => {
  waitFor(loginField, 'input').then(printMessage);
});

passwordField.addEventListener('input', () => {
  waitFor(passwordField, 'input').then(printMessage);
});

loginField.addEventListener('blur', () => {
  waitFor(loginField, 'blur').then(printMessage);
});

passwordField.addEventListener('blur', () => {
  waitFor(passwordField, 'blur').then(printMessage);
});

button.addEventListener('blur', () => {
  waitFor(button, 'blur').then(printMessage);
});

// waitFor(loginField, 'click').then(printMessage);
// waitFor(passwordField, 'click').then(printMessage);
// waitFor(button, 'click').then(printMessage);

// waitFor(loginField, 'input').then(printMessage);
// waitFor(passwordField, 'input').then(printMessage);

// waitFor(loginField, 'blur').then(printMessage);
// waitFor(passwordField, 'blur').then(printMessage);
// waitFor(button, 'blur').then(printMessage);

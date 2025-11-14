'use strict';

// const { createElement } = require('react');

const bodyField = document.body;

function waitFor(element, eventName) {
  const Prom1 = new Promise((resolve, reject) => {
    function funEvent() {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );

      element.removeEventListener(eventName, funEvent);
    }

    element.addEventListener(eventName, funEvent);
  });

  return Prom1;
}

const printMessage = (message) => {
  const div1 = document.createElement('div');

  div1.classList.add('message');
  div1.innerHTML = message;

  bodyField.append(div1);
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

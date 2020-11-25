'use strict';

const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#submit');

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, e => {
      e.preventDefault();
      resolve(`${eventName} happened on ${element.nodeName}`);
    });
  });
};

// eslint-disable-next-line no-console
waitFor(loginInput, 'focus').then(result => console.log(result));
// eslint-disable-next-line no-console
waitFor(passwordInput, 'blur').then(result => console.log(result));
// eslint-disable-next-line no-console
waitFor(loginButton, 'click').then(result => console.log(result));

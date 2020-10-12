/* eslint-disable no-console */
'use strict';

// write your code here
function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, (event) => {
      event.preventDefault();
      resolve(event.target.id);
    });
  });
}

function print(elementId) {
  console.log(elementId);
}

const login = document.getElementById('login');
const password = document.getElementById('password');
const button = document.getElementById('submit');

const promise1 = waitFor(login, 'click');
const promise2 = waitFor(password, 'click');
const promise3 = waitFor(button, 'click');

promise1
  .then(print);

promise2
  .then(print);

promise3
  .then(print);

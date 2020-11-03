'use strict';

// write your code here
function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} and promise resolved`);
    });
  });
}

const loginInput = document.querySelector('#login');
const passInput = document.querySelector('#password');

function print(value) {
  // eslint-disable-next-line no-console
  console.log(value);
}

const promise1 = waitFor(loginInput, 'click');
const promise2 = waitFor(passInput, 'blur');

promise1
  .then(print);

promise2
  .then(print);

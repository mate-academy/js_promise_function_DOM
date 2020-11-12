'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element:
          ${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const print = (message) => {
  const divMessage = document.createElement('div');

  divMessage.className = 'message';
  divMessage.textContent = message;
  document.querySelector('form').append(divMessage);
};
const login = document.getElementById('login');
const password = document.getElementById('password');
const button = document.getElementById('submit');
const promiseClick1 = waitFor(login, 'click');
const promiseClick2 = waitFor(password, 'click');
const promiseClick3 = waitFor(button, 'click');
const promiseInput1 = waitFor(login, 'input');
const promiseInput2 = waitFor(password, 'input');
const promiseBlur1 = waitFor(login, 'blur');
const promiseBlur2 = waitFor(password, 'blur');
const promiseBlur3 = waitFor(button, 'blur');

promiseClick1
  .then(result => print(result));

promiseClick2
  .then(result => print(result));

promiseClick3
  .then(result => print(result));

promiseInput1
  .then(result => print(result));

promiseInput2
  .then(result => print(result));

promiseBlur1
  .then(result => print(result));

promiseBlur2
  .then(result => print(result));

promiseBlur3
  .then(result => print(result));

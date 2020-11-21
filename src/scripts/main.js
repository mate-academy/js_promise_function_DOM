'use strict';

// write your code here

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `You clicked on element:
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

const promise1 = waitFor(login, 'click');
const promise2 = waitFor(password, 'click');
const promise3 = waitFor(button, 'click');

promise1
  .then(result => print(result));

promise2
  .then(result => print(result));

promise3
  .then(result => print(result));

/* eslint-disable no-console */
'use strict';

const login = document.getElementById('login');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, (event) => {
      resolve(`You ${eventName} on ${event.target.id}`);
    });
  });
}

const promise1 = waitFor(login, 'click');
const promise2 = waitFor(password, 'click');
const promise3 = waitFor(submit, 'click');

promise1
  .then((result) => {
    console.log(result);
  });

promise2
  .then((result) => {
    console.log(result);
  });

promise3
  .then((result) => {
    console.log(result);
  });

/* eslint-disable no-console */
'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, e => {
      resolve(`You have clicked on ${e.target.id}`);
    });
  });
}

function printName(val) {
  console.log('the val is', val);
}

const login = document.getElementById('login');
const pass = document.getElementById('password');
const submit = document.getElementById('submit');

const promise1 = waitFor(login, 'click');
const promise2 = waitFor(pass, 'click');
const promise3 = waitFor(submit, 'click');

Promise.race([promise1, promise2, promise3])
  .then(printName);

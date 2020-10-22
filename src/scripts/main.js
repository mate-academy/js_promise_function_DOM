/* eslint-disable no-console */
'use strict';

const docBody = document.querySelector('body');

const login = docBody.getElementById('login');
const password = docBody.getElementById('password');
const button = docBody.getElementById('submit');

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, event => {
      resolve(`You clicked on ${event.target.id}`);
    });
  });
}

const promiseOne = waitFor(login, 'click');
const promiseTwo = waitFor(password, 'click');
const promiseThree = waitFor(button, 'click');

promiseOne.then(result => console.log(result));
promiseTwo.then(result => console.log(result));
promiseThree.then(result => console.log(result));
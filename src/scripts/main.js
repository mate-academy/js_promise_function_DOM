/* eslint-disable no-console */
'use strict';

const button = document.getElementById('submit');
const login = document.getElementById('login');
const password = document.getElementById('password');

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      e.preventDefault();
      resolve(`Login: ${login.value} Password: ${password.value}`);
    });
  });
}

const res = waitFor(button, 'click');

res.then((result) => console.log(result));

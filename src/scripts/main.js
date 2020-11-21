'use strict';

const login = document.getElementById('login');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, (e) => {
      e.preventDefault();
      resolve(`${eventName}: ${e.target.id}`);
    });
  });
}
// eslint-disable-next-line no-console
waitFor(login, 'blur').then(result => console.log(result));
// eslint-disable-next-line no-console
waitFor(password, 'change').then(result => console.log(result));
// eslint-disable-next-line no-console
waitFor(submit, 'click').then(result => console.log(result));

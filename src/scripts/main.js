'use strict';

const login = document.querySelector('#login');
const password = document.querySelector('#password');
const button = document.querySelector('#submit');

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      resolve(`It works, you clicked ${e.target.id}`);
    });

    setTimeout(() => {
      reject(new Error('Time is out'));
    }, 25000);
  });
}

const promise1 = waitFor(login, 'focus');
const promise2 = waitFor(password, 'focus');
const promise3 = waitFor(button, 'click');

promise1
  .then((result) => {
    // eslint-disable-next-line no-console
    console.log(result);
  }, (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  });

promise2
  .then((result) => {
    // eslint-disable-next-line no-console
    console.log(result);
  }, (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  });

promise3
  .then((result) => {
    // eslint-disable-next-line no-console
    console.log(result);
  }, (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  });

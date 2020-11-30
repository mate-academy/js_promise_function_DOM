'use strict';

const element = document.querySelector('#login');
const element2 = document.querySelector('#password');
const element3 = document.getElementById('submit');
let target;

document.addEventListener('click', (e) => {
  e.preventDefault();
  target = e.target;

  const promise = waitFor(element3, target);

  promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
});

function waitFor(elem, eventName) {
  return new Promise((resolve, reject) => {
    if (elem === eventName) {
      return resolve('Sucessfull');
    }
    reject('Error');
  });
}
